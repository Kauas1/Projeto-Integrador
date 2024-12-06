import Users from "../../Model/users.js";
import { getSchema } from "../../helpers/zodSchemas.js";
import { createUser } from "../../helpers/zodSchemas.js";
import bcrypt from 'bcrypt';
import formatZodError from '../../helpers/formatZodError.js';
import getToken from "../../helpers/getToken.js";
import getUserByToken from "../../helpers/getUserByToken.js";
import createUserToken from '../../helpers/createToken.js';

export const createUserRoute = async (req, res) => {
    const bodyValidation = createUser.safeParse(req.body);

    if(!bodyValidation.success){
        return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)})
    }

    const {nome, email, senha} = bodyValidation.data;

    let image = req.body.image;
    
    if(!image){
        if(req.file){
            image = req.file.path.split('\\public')[1].replace('\\', '/').replace('\\', '/');
        }else{
            image = '/public/users/default-user.webp'
        }
    }
    
    //password encrypt
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    const user = {nome, email, senha: senhaHash, image};

    try {
        const sameEmail = await Users.findOne({where: {email}});

        if(sameEmail){
            return res.status(403).json({message: "Já existe um usuario com este email"});
        }
        const userCreated = await Users.create(user)
        res.status(201).json({message: "Usuario criado!", userCreated});
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro ao criar usuario" });
    }
}

export const getUsers = async (req, res) => {
    try{
        const users = await Users.findAll();

        res.status(200).json(users)
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Erro ao buscar os usuarios!"})
    }
}

export const deleteUser = async (req, res) => {
    const idValidation = getSchema.safeParse(req.params.id)
    if(!idValidation.success){
        return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(idValidation.error)})
    }
    const user_id = idValidation.data;

    try {
        const user = await Users.findByPk(user_id);

        if(!user){
            return res.status(404).json({message: "Este usuario não foi encontrado!"});
        }
        
        await Users.destroy({where: {user_id}});
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao deletar usuario!"})
    }
}

export const editUser = async (req, res) => {
    const idValidation = getSchema.safeParse(req.params.id)
    if(!idValidation.success){
        return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(idValidation.error)})
    }
    const id = idValidation.data;

    const bodyValidation = updateUser.safeParse(req.body);

    if(!bodyValidation.success){
        return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)})
    }

    const {nome, email, senha} = bodyValidation.data;
    let image = req.body.image;

    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    const userData = {nome, email, senha: senhaHash, image};

    try{
        const token = getToken(req);
        const user = await getUserByToken(token);
        const user_id = user.dataValues.user_id

        const emailCheck = await Users.findOne({where: {email}});
        if(emailCheck){
            if(emailCheck.user_id !== user_id){
                return res.status(403).json({message: "Já existe um usuario com este email!"});
            }
        }
        if(!image){
            if(req.file){
                image = req.file.path.split('\\public')[1].replace('\\', '/').replace('\\', '/');
            }else{
                image = emailCheck.dataValues.image
            }
        }

        console.log(emailCheck.dataValues)
        await Users.update(userData, {where: {user_id}});

        res.status(200).json({message: "Usuario atualizado com sucesso!"})
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Erro ao atualizar os dados do usuario!"})
    }
}

export const loginController = async (req, res) => {
    const bodyValidation = loginUserSchema.safeParse(req.body);

    if(!bodyValidation.success){
        return res.status(400).json({message: "Os dados recebidos no corpo da aplicação são invalidos", detalhes: formatZodError(bodyValidation.error)})
    }

    const {email, senha} = bodyValidation.data;

    const loginData = {email, senha}

    try{
        const user = await Users.findOne({where: {email}});
        if(!user){
            return res.status(404).json({message: "Não foi encontrado nenhum usuario com este email"});
        }

        const usuario = user.dataValues;

        const compararSenha = await bcrypt.compare(senha, usuario.senha);

        if(!compararSenha){
            return res.status(403).json({message: "A senha não condiz!"})
        }

        await createUserToken(usuario, req, res);
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Erro ao logar com o usuario"});
    }
}
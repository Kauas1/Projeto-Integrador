import { Router } from "express";
import { loginController, createUserRoute, editUser, getUsers, deleteUser } from "../Controllers/users/user.js";
import imageUpload from "../helpers/imageUpload.js";
import verifyToken from "../helpers/verifyToken.js";

const router = Router();

router.post('/cadastro-cliente', imageUpload.single('image'), createUserRoute);
router.post('/login-cliente', loginController);
router.put('/:id', verifyToken, imageUpload.single('image'), editUser)
router.get('/', verifyToken, getUsers);
router.delete('/:id', verifyToken, deleteUser);

export default router;
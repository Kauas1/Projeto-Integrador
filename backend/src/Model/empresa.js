import sequelize from '../config/dbconfig.js'
import { DataTypes } from 'sequelize'


const Empresa = sequelize.define(
    'Empresa', 
    {
        empresa_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: {
            type: DataTypes.TEXT('tiny'),
            allowNull: false,
            required: true
        },
        email: {
            type: DataTypes.TEXT('medium'),
            allowNull: false,
            required: true
        },
        senha: {
            type: DataTypes.TEXT('medium'),
            allowNull: false,
            required: true
        },
        comida: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },

        image: {
            type: DataTypes.TEXT('medium'),
            allowNull: true
        }
},
{
    tableName: "Empresa",
    timestamps: true,
    createdAt: true,
    updatedAt: true
})

export default Empresa;
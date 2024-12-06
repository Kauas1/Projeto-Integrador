import sequelize from '../config/dbconfig.js'
import { DataTypes } from 'sequelize'
import Empresa from './empresa.js';

const comida = sequelize.define(
    'comida', 
    {
        comida_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        image: {
            type: DataTypes.TEXT('medium'),
            allowNull: true
        }
},
{
    tableName: "comida",
    timestamps: true,
    createdAt: true,
    updatedAt: true
})

comida.belongsTo(Empresa)

export default comida;
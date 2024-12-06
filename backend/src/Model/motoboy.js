import sequelize from '../config/dbconfig.js'
import { DataTypes } from 'sequelize'


const Motoboy = sequelize.define(
    'Motoboy', 
    {
        motoboy_id: {
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
        image: {
            type: DataTypes.TEXT('medium'),
            allowNull: true
        }
},
{
    tableName: "Motoboy",
    timestamps: true,
    createdAt: true,
    updatedAt: true
})

export default Motoboy;
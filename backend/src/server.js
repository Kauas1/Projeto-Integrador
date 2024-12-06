import express from 'express'
import dotenv from 'dotenv'
import sequelize from './config/dbconfig.js'
import bodyParser from 'body-parser';
import userRoutes from "./Routes/userRoutes.js"
import { fileURLToPath } from "node:url";
import path from 'node:path';

dotenv.config()

const app = express()
const PORT = 3333

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

app.use('/public', express.static(path.join(__dirName, 'public')));

app.use('/users', userRoutes);

app.use((req, res) => {
    res.status(404).json({message: "Page Not Found"})
})

sequelize.sync().then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
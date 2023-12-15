import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import { userModel } from "../models/user.js";
import { noteModel } from "../models/note.js";
dotenv.config()

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

let User = null; 
let Note = null;

export const connectDB = async() => {
    
    const sequelize = new Sequelize( database, username, password, {
        host: 'localhost',
        dialect: 'postgres',
        typeCast: false
    });
    
    try {
        await sequelize.authenticate();
        User = userModel(sequelize);
        Note = noteModel(sequelize);
        await sequelize.sync({ force: false })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { User, Note };
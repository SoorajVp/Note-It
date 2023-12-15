import express from 'express';
import { connectDB } from './config/database.js';
import cors from 'cors'
import dotenv from 'dotenv';

import errorHandler from './middlewares/errorMiddleware.js'
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import noteRouter from './routes/note.js';
dotenv.config()

const app = express();
const port = process.env.SERVER_PORT;


// Connecting Database
connectDB()

// Middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing Middlewares
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/note', noteRouter)

// ErrorHandling Middleware
app.use(errorHandler)

app.listen( port, () => {
    console.log(`Port listening on ${port}`)
})
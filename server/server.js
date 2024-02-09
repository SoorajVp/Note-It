import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';

import { connectDB } from './config/database.js';
import errorHandler from './middlewares/errorMiddleware.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import noteRouter from './routes/note.js';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 4000;

// Connecting Database
connectDB();

// Middlewares
app.use(cors({
    origin: 'http://localhost:5000/',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing Middlewares
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/note', noteRouter);

// ErrorHandling Middleware
app.use(errorHandler);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

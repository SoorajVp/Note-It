import express from 'express';
import controller from '../controllers/userController.js';
import { verifyUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verifyUser, controller.getUserData)

router.get('/update', verifyUser, controller.updateProfile)


export default router;
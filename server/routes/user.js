import express from 'express';
import controller from '../controllers/userController.js';
import { verifyUser } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.get('/', verifyUser, controller.getUserData)

router.post('/update', verifyUser, controller.updateProfile)

router.post('/checkPassword', verifyUser, controller.checkPassword)

router.post('/changePassword', verifyUser, controller.changePassword)


export default router;
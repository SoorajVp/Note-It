import express from 'express';
import controller from '../controllers/userController.js';

const router = express.Router();

router.get('/update', controller.updateProfile)


export default router;
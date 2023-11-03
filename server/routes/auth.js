import express from 'express';
import controller from '../controllers/authController.js'

const router = express.Router();

router.get('/register', controller.register)

router.get('/login', controller.login)

export default router;
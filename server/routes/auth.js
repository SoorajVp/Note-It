import express from 'express';
import controller from '../controllers/authController.js'

const router = express.Router();


router.post('/register', controller.register)

router.post('/login', controller.login)

router.post('/send-otp', controller.sendOTPSMS)


export default router;
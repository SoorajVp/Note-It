import { User } from "../config/database.js";
import { comparePassword, encryptPassword, generateToken } from "../services/authService.js";
import { sendMobileOtp } from "../services/otpService.js";
import CustomError from "../utils/CustomError.js";

import twilio from 'twilio';
const accountSid = "ACcb80f2213b81d28cdd1f8e188ccd0ef7";
const authToken = "80c01a9e9397619e2269aa6fc1f7db9a";
const verifySid = "VA4f8a2ab3d7c2df8e7027c75c6667472c";
const client = twilio(accountSid, authToken);

export default {

    register: async (req, res, next) => {
        try {
            let { name, mobile, password } = req.body;

            const isNameExist = await User.findOne({ where: { name: name } });
            if (isNameExist) {
                throw new CustomError('Username is already registered', 400);
            }
            const isMobileExist = await User.findOne({ where: { mobile: mobile } });
            if (isMobileExist) {
                throw new CustomError('Mobile is already registered', 400);
            }

            password = await encryptPassword(password);
            const newUser = await User.create({ name, mobile, password });
            const token = generateToken(newUser?.id);
            return res.status(201).json({ message: "Account created successfully", data: newUser, status: true, token });

        } catch (error) {
            next(error)
        }
    },

    login: async (req, res, next) => {
        try {
            const { name, password } = req.body
            const user = await User.findOne({ where: { name } });

            if (!user) {
                throw new CustomError('Invalid username or password', 400);
            }
            const checkPassword = await comparePassword(password, user?.password)
            if (!checkPassword) {
                throw new CustomError('Invalid username or password', 400);
            }
            const token = generateToken(user?.id);
            res.json({ message: "Loggedin successfully", data: user, status: true, token })
        } catch (error) {
            next(error)
        }
    },

    sendOTPSMS: async (req, res, next) => {
        try {
            console.log('Sending OTP ', req.body.mobile)
            const verification = await sendMobileOtp(req.body.mobile) 
            console.log('Verification', verification)
            if(!verification.status) {
                throw new CustomError('Error while sending OTP', 400);
            }
            res.json({ message: "OTP send successfully", status: true })
        } catch (error) {
            next(error)
        }
    }


}
import { User } from "../config/database.js";
import { comparePassword, encryptPassword, generateToken } from "../services/authService.js";
import { sendOtpService, verifyOtpService } from "../services/otpService.js";
import CustomError from "../utils/CustomError.js";



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

    sendMobileOtp: async (req, res, next) => {
        try {
            console.log('Sending OTP ', req.body.mobile)
            const user = await User.findOne({ where: { mobile: req.body.mobile } });

            if (!user) {
                throw new CustomError('Mobile is not registered yet', 400);
            }
            const verification = await sendOtpService(req.body.mobile) 
            console.log('Verification', verification)
            if(!verification.status) {
                throw new CustomError('Error while sending OTP', 400);
            }
            res.json({ message: "OTP send successfully", status: true })
        } catch (error) {
            next(error)
        }
    },

    verifyMobileOtp: async (req, res, next) => {
        try {
            console.log(req.body)
            const verification = await verifyOtpService(req.body.mobile, req.body.otp)
            console.log('Verification', verification)
            if (!verification.valid) {
                throw new CustomError('Invalid OTP', 400);
            }
            res.json({ message: "OTP verified successfully", status: true })
        } catch (error) {
            next(error)
        }
    }

}
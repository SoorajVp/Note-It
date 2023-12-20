import { User } from "../config/database.js";
import { comparePassword, encryptPassword, generateToken } from "../services/authService.js";
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
    }


}
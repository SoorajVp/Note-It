import { User } from "../config/database.js"
import CustomError from "../utils/CustomError.js";

export default {

    getUserData: async(req, res, next) => {
        try {
            const user = await User.findByPk(req.userId);
            if (!user) {
                throw new CustomError("User not found", 404);
            }
            return res.status(201).json({ message: "User data fetched", data: user });
        } catch (error) {
            next(error);
        }
    },

    updateProfile: async(req, res, next) => {
        try {
            const { name, mobile } = req.body
            const user = await User.findByPk(req.userId)
            if (!user) {
                throw new CustomError("User not found", 404);
            }
            const isNameExist = await User.findOne({ where: { name: name } });
            if (isNameExist && isNameExist.name != user.name) {
                throw new CustomError('Username is already registered', 400);
            }
            
            const isMobileExist = await User.findOne({ where: { mobile: mobile } });
            console.log("user by pk - - - -", user)
            console.log("user by mobile - - - -", isMobileExist)
            if ( isMobileExist && isMobileExist?.mobile != user.mobile) {
                throw new CustomError('Mobile is already registered', 400);
            }
            const updatedUser = await user.update({ name, mobile })
            return res.status(201).json({ message: "User updated successfully", data: updatedUser });
        } catch (error) {
            console.error(error)
            next(error);
        }
    }
    
}
import { verifyToken } from "../services/authService.js";
import CustomError from "../utils/CustomError.js";

export const verifyUser = async(req, res, next) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if(!token) {
            throw new CustomError("Unauthorized: No token provided", 401)
        }
        const decode = verifyToken(token);
        req.userId = decode.userId
        next()
    } catch (error) {
        next(error)
    }
}
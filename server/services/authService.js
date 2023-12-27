import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import CustomError from '../utils/CustomError.js';


// Token Services
export const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.TOKEN_SECRET_KEY, { expiresIn: '5d' })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        return decoded;
    } catch (err) {
        throw new CustomError('Unauthorized: Invalid token', 401);
    }
}


// Password Services
export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}
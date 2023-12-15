import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'


export const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.TOKEN_SECRET_KEY, { expiresIn: '5d' })
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET_KEY)
}

export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}
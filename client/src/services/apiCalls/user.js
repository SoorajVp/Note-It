import toast from "react-hot-toast";
import axiosInstance from "../axios"

export const getUserData = async() => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        throw error?.response?.data 
    }
}

export const updateUserData = async(payload) => {
    try {
        const response = await axiosInstance.post('/user/update', payload)
        toast.success(response?.data?.message)
        return response?.data
    } catch (error) {
        toast.error(error?.response?.data?.message);
        throw error?.response?.data
    }
}
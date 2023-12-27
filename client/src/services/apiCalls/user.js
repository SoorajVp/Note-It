import toast from "react-hot-toast";
import axiosInstance from "../axios"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const updateUserData = createAsyncThunk(
    'users/updateUserData', async (payload) => {
        try {
            const response = await axiosInstance.post('/user/update', payload)
            toast.success(response?.data?.message)
            return response?.data
        } catch (error) {
            toast.error(error?.response?.data?.message);
            throw error?.response?.data
        }
    }
)

export const changePassword = async (payload) => {
    try {
        const response = await axiosInstance.post('/user/changePassword', payload);
        toast.success(response.data?.message)
        return response?.data
    } catch (error) {
        console.error(error)
        toast.error(error?.response?.data?.message)
        return error?.response?.data
    }
}

export const checkPassword = async (payload) => {
    try {
        const response = await axiosInstance.post('/user/checkPassword', payload)
        return response?.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        return error?.response?.data
    }
}

export const getUserData = async () => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        throw error?.response?.data
    }
}
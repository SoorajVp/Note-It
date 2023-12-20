import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../axios"


export const submitLogin = createAsyncThunk(
    'users/submitLogin', async (payload) => {
        try {
            const response = await axiosInstance.post('/auth/login', payload)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error?.response?.data)
            throw error?.response?.data;
            // return error?.response?.data
        }
    }
)

export const submitRegister = createAsyncThunk(
    'users/submitRegister', async( payload ) => {
        try {
            const response = await axiosInstance.post('/auth/register', payload)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error?.response?.data)
            throw error?.response?.data;
            // return error?.response?.data
        }
    }
)
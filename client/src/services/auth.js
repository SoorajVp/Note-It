import axiosInstance from "./axios"


export const authRequest = {
    login: async(payload) => {
        try {
            const response = await axiosInstance.post('/auth/login', payload)
            return response.data
        } catch (error) {
            return error?.response?.data
        }
    }
}
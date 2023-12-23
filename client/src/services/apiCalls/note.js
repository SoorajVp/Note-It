import axiosInstance from "../axios"

export const createNote = async(payload) => {
    try {
        const response = await axiosInstance.post('/note/create', payload)
        return response.data
    } catch (error) {
        return error?.response?.data
    }
}

export const getUserNotes = async() => {
    try {
        const response = await axiosInstance.get('/note/')
        return response.data
    } catch (error) {
        return error?.response?.data
    }
}
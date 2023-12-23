import axiosInstance from "../axios"
import toast from "react-hot-toast"

export const createNewNote = async(payload) => {
    try {
        const response = await axiosInstance.post('/note/create', payload)
        toast.success(response?.data?.message)
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        throw error?.response?.data
    }
}

export const getUserNotes = async () => {
    try {
        const response = await axiosInstance.get('/note/')
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        throw error?.response?.data
    }
}

export const getSingleNote = async (noteId) => {
    try {
        const response = await axiosInstance.get(`/note/${noteId}`)
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        throw error?.response?.data
    }
}

export const updateNote = async (payload) => {
    try {
        const response = await axiosInstance.post(`/note/update/${payload?.id}`, payload)
        toast.success(response?.data?.message)
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        throw error?.response?.data
    }
}
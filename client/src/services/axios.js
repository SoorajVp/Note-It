import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', // Set your API base URL
    timeout: 5000, // Set a timeout
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('BytePadToken'); 
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', 
    timeout: 5000,
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

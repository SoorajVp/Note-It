// axios-instance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000', // Set your API base URL
    timeout: 5000, // Set a timeout
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify the request config here (e.g., add headers)
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default axiosInstance;

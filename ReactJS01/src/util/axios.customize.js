import axios from "axios";

// Tạo một instance axios
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

// Can thiệp vào quá trình gửi request (Request Interceptor)
instance.interceptors.request.use(function (config) {
    // Gắn token từ localStorage vào Header
    config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Can thiệp vào quá trình nhận response (Response Interceptor)
instance.interceptors.response.use(function (response) {
    if (response && response.data) return response.data;
    return response;
}, function (error) {
    if (error?.response?.data) return error?.response?.data;
    return Promise.reject(error);
});

export default instance;
import axios from "axios";

const httpServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor cho request
httpServer.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor cho response
httpServer.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response || error.message);
  }
);

export default httpServer;

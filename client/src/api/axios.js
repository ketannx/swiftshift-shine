// src/utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://swiftshiftshine.vercel.app/api",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

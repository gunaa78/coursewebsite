import axios from "axios";

const api = axios.create({
  baseURL:"https://coursewebsite-xw4b.onrender.com",
});

/* =========================================================
   ADD JWT TOKEN TO EVERY REQUEST
========================================================= */

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
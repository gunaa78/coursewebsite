import axios from "axios";

const api = axios.create({
  baseURL: "https://coursewebsite-xw4b.onrender.com/api",
});

export default api;
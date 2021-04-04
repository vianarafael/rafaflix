import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3333/api";

const  api = axios.create({
    baseURL
})

export default api;
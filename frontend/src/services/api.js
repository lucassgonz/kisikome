import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'  // ajuste conforme backend
});

export default api;

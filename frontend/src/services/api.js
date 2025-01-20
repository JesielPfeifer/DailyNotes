import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Obtém o token do Local Storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Adiciona o token ao cabeçalho
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;

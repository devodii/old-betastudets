import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (config.url && config.url.startsWith('/api/')) {
      config.url = config.url.replace('/api/', '/');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

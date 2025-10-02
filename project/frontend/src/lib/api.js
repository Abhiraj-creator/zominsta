import axios from 'axios';

// Prefer same-origin in production (for Vercel rewrite proxy),
// fall back to VITE_API_URL if explicitly provided, otherwise localhost for dev
const isProd = import.meta.env.PROD;
const envURL = import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim() !== ''
  ? import.meta.env.VITE_API_URL
  : undefined;
const baseURL = envURL ?? (isProd ? '/' : 'http://localhost:3000');

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;

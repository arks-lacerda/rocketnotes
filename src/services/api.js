import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-notes-8uyj.onrender.com',
});

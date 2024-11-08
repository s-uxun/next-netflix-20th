import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default instance;

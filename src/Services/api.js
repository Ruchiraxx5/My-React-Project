//Import axios
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', //Local host api url.
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;


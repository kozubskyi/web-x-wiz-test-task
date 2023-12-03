import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:4000/api';

const instans = axios.create({
  baseURL: API_URL,
});

instans.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${Cookies.get('token')}`;

  return config;
});

export default instans;

import axios from 'axios';
import config from './config';

const instance = axios.create();
instance.interceptors.request.use((request) => {
  const c = config();

  request.baseURL = `${c.url}/rest`;
  request.headers.Authorization = `Basic ${c.authorization}`;

  return request;
});

export default instance;

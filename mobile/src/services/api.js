import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-radar-gustavo-tp.herokuapp.com',
});

export default api;

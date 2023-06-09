import axios from 'axios'

const BASE_URL = 'http://localhost:3500'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

export const privateInstance = axios.create({
    baseURL: BASE_URL,
    headers:{'Content-Type': 'application/json'},
    withCredentials: true
});

export default instance
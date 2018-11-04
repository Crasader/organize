import axios from 'axios';
import { store } from '../store';

const api = axios.create({
    baseURL: 'http://organize-api.test/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (config) => {
    const { token } = store.getState().auth;

    if (token !== '') {
        /* eslint no-param-reassign: "error" */
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;

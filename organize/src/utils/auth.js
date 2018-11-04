import { store } from '../store';

export const isAuthenticated = () => store.getState().auth.token !== '';

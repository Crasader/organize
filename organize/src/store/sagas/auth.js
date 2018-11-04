import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as AuthActions } from '../ducks/auth';
import { Creators as AlertsActions } from '../ducks/alerts';

import history from '../../utils/history';

export function* authorize(action) {
    try {
        const { email, password } = action.payload;

        const response = yield call(api.post, '/auth/login', { email, password });

        yield put(AuthActions.authorizeSuccess(response.data.access_token));

        yield call(history.push, '/dashboard');
    } catch (err) {
        yield put(AlertsActions.setError('danger', 'E-mail e/ou senha inválidos'));
        yield put(AuthActions.authorizeError());
    }
}

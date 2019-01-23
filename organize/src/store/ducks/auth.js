export const Types = {
    AUTH_REQUEST: 'auth/AUTH_REQUEST',
    AUTH_SUCCESS: 'auth/AUTH_SUCCESS',
    AUTH_ERROR: 'auth/AUTH_ERROR',
    LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'auth/LOGOUT_ERROR',
};

const INITIAL_STATE = {
    token: '',
    user: {},
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.AUTH_REQUEST:
        return { ...state, loading: true };
    case Types.AUTH_SUCCESS:
        return { ...state, loading: false, token: action.payload.token };
    case Types.AUTH_ERROR:
        return { ...state, loading: false };
    case Types.LOGOUT_REQUEST:
        return { ...state, loading: true };
    case Types.LOGOUT_SUCCESS:
        return { ...state, loading: false, token: '' };
    case Types.LOGOUT_ERROR:
        return { ...state, loading: false };

    default:
        return state;
    }
}

export const Creators = {
    authorize: (email, password) => ({
        type: Types.AUTH_REQUEST,
        payload: {
            email,
            password,
        },
    }),

    authorizeSuccess: token => ({
        type: Types.AUTH_SUCCESS,
        payload: {
            token,
        },
    }),

    authorizeError: () => ({
        type: Types.AUTH_ERROR,
    }),

    logout: () => ({
        type: Types.LOGOUT_REQUEST,
    }),

    logoutSuccess: () => ({
        type: Types.LOGOUT_SUCCESS,
    }),

    logoutError: () => ({
        type: Types.LOGOUT_ERROR,
    }),
};

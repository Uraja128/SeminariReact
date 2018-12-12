import { LOGIN_PARAM_CHANGE, CHECK_PRIVACY, LOGIN_FAIL, LOGIN_FETCH, LOGIN_SUCCESS } from '../constants/ActionTypes';

const INITIAL_STATE = {
    privacy: {
        checked: false
    },
    login: {
        email: '',
        password: '',
        error: '',
        loading: false
    }
};

const AuthenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_PARAM_CHANGE:
            return {
                ...state,
                login: {
                    ...state.login,
                    [action.payload.key]: action.payload.value
                }
            };
        case CHECK_PRIVACY:
            return {
                ...state,
                privacy: {
                    ...state.privacy,
                    checked: action.payload
                }
            };
        case LOGIN_FETCH:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true
                }
            };
        case LOGIN_FAIL:
            return {
                ...state,
                login: {
                    ...state.login,
                    error: 'credenziali errate',
                    loading: false
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    email: '',
                    password: '',
                    error: '',
                    loading: false
                }
            };
        default:
            return state;
    }
};

export default AuthenticationReducer;

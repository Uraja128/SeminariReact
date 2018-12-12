import { LOGIN_PARAM_CHANGE, CHECK_PRIVACY } from '../constants/ActionTypes';

const INITIAL_STATE = {
    privacy: {
        checked: false
    },
    login: {
        email: '',
        password: '',
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
            default:
            return state;
    }
};

export default AuthenticationReducer;

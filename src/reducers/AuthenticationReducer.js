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
        case 'LOGIN_EMAIL_CHANGE':
            return {
                ...state,
                login: {
                    ...state.login,
                    email: action.payload
                }
            };
        case 'CHECK_PRIVACY':
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

const INITIAL_STATE = {
    privacy: {
        checked: false
    }
};

const AuthenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHECK_PRIVACY':
            return {
                ...state,
                privacy: {
                    ...state.privacy,
                    checked: true
                }
            };
            default:
            return state;
    }
};

export default AuthenticationReducer;

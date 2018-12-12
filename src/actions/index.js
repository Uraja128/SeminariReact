const setPrivacyAuth = (privacyState) => {
    console.warn(privacyState);
    return {
        type: 'CHECK_PRIVACY',
        payload: privacyState
    };
};

const loginEmailChange = (email) => {
    return {
        type: 'LOGIN_EMAIL_CHANGE',
        payload: email
    };
};

const loginParamChange = (key, value) => {
    return {
        type: 'LOGIN_PARAM_CHANGE',
        payload: {
            key,
            value
        }
    };
};



export { setPrivacyAuth, loginEmailChange, loginParamChange };

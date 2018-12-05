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

export { setPrivacyAuth, loginEmailChange };

const setPrivacyAuth = (privacyState) => {
    console.warn(privacyState);
    return {
        type: 'CHECK_PRIVACY',
        payload: privacyState
    };
};

export { setPrivacyAuth };

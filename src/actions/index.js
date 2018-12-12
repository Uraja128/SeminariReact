import { CHECK_PRIVACY, LOGIN_PARAM_CHANGE } from '../constants/ActionTypes';

const setPrivacyAuth = (privacyState) => {
    console.warn(privacyState);
    return {
        type: CHECK_PRIVACY,
        payload: privacyState
    };
};

const loginParamChange = (key, value) => {
    return {
        type: LOGIN_PARAM_CHANGE,
        payload: {
            key,
            value
        }
    };
};

export { setPrivacyAuth, loginParamChange };

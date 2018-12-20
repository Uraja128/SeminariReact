import firebase from 'firebase';
import {
    CHECK_PRIVACY,
    LOGIN_PARAM_CHANGE,
    LOGIN_FETCH,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/ActionTypes';
import { getLoginFS } from '../selectors';

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

const login = () => {
    return {
        type: LOGIN_FETCH
    };
};

const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    };
};
const loginFail = (message = 'Invalid Credential') => {
    return {
        type: LOGIN_FAIL,
        payload: {
            message
        }
    };
};

const loginFetch = () => {
    return (dispatch, getState) => {
        const {
            email,
            password
        } = getLoginFS(getState());

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch(loginSuccess());
            })
            .catch(({ code, message }) => {
                dispatch(loginFail(message));
            });
    };
};

export { setPrivacyAuth, loginParamChange, login, loginSuccess, loginFail, loginFetch };

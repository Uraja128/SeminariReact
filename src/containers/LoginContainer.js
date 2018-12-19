import { connect } from 'react-redux';
import firebase from 'firebase';
import LoginScreen from '../screen/LoginScreen';
import {
    setPrivacyAuth,
    loginParamChange,
    login, loginSuccess, loginFail
} from '../actions';
import { getLoginFS, getPrivacyFS } from '../selectors';

const mapStateToProps = (state) => {
    const {
        email,
        password,
        loading,
        error
    } = getLoginFS(state);
    const privacy = getPrivacyFS(state);
    return {
        privacy,
        email,
        password,
        loading,
        error
    };
};

// esempio
const mapDispatchToProps = (dispatch, getState) => {
    return {
        setPrivacyAuth: () => {
            dispatch(setPrivacyAuth());
        },
        loginParamChange: () => {
            dispatch(loginParamChange());
        },
        login: () => {
            dispatch(login());
            setTimeout(() => {
                dispatch(loginSuccess());
                //dispatch(loginFail());
            }, 1000);
            return;
            const state = getState();
            const { email, password } = state.auth.login;
            setTimeout(() => {
                if (email === 'admin@gmail.com' && password === 'pippo') {
                    dispatch(loginSuccess());
                } else {
                    dispatch(loginFail());
                }
            }, 1000);
        },
    };
};

export default connect(mapStateToProps, {
    setPrivacyAuth,
    loginParamChange,
    login: () => (dispatch, getState) => {
        dispatch(login());
        const {
            email,
            password
        } = getLoginFS(getState());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('then');
                // dispatch(loginSuccess())
            })
            .catch(({ code, message }) => {
                console.log('catch', code, message);
                dispatch(loginFail(message));
            });
    }
})(LoginScreen);

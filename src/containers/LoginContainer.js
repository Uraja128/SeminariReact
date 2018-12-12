import { connect } from 'react-redux';
import LoginScreen from '../screen/LoginScreen';
import {
    setPrivacyAuth,
    loginParamChange,
    login, loginSuccess, loginFail
} from '../actions';

const mapStateToProps = (state) => {
    const { auth: { privacy, login: {
        email, password,
        loading, error
    } } } = state;
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
            const { email, password } = state.user.login;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

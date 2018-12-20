import { connect } from 'react-redux';
import LoginScreen from '../screen/LoginScreen';
import {
    setPrivacyAuth,
    loginParamChange,
    login, loginFetch
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
const mapDispatchToProps = (dispatch) => {
    return {
        setPrivacyAuth,
        loginParamChange,
        login: () => {
            dispatch(login());
            dispatch(loginFetch())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

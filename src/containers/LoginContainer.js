import { connect } from 'react-redux';
import LoginScreen from '../screen/LoginScreen';
import {
    setPrivacyAuth,
    loginParamChange
 } from '../actions';

const mapStateToProps = (state) => {
    const { auth: { privacy, login: { email, password } } } = state;
    return {
        privacy,
        email,
        password
    };
};

// esempio
const mapDispatchToProps = (dispatch) => {
    return {
        setPrivacyAuth: () => {
            // se non sto digitando lancio l'action
            setTimeout(() => {
                dispatch(setPrivacyAuth);
            }, 2000);
        },
    };
};

export default connect(mapStateToProps, {
    setPrivacyAuth,
    loginParamChange
})(LoginScreen);

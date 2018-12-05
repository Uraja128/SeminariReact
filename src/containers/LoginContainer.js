import { connect } from 'react-redux';
import LoginScreen from '../screen/LoginScreen';
import {
    setPrivacyAuth,
    loginEmailChange
 } from '../actions';

const mapStateToProps = (state) => {
    const { auth: { privacy, login: { email, password } } } = state;
    return {
        privacy,
        email,
        password
    };
};

const mapDispatchToProps = () => ({
    setPrivacyAuth,
    loginEmailChange
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

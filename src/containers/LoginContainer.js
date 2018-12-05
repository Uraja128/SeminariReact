import { connect } from 'react-redux';
import LoginScreen from '../screen/LoginScreen';
import { setPrivacyAuth } from '../actions';

const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        auth
    };
};

export default connect(mapStateToProps, { setPrivacyAuth })(LoginScreen);

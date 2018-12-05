import { connect } from 'react-redux';
import LoginScreen from '../screen/LoginScreen';

const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        auth
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

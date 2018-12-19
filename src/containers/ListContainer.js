import { connect } from 'react-redux';
import ListScreen from '../screen/ListScreen';
import { LOGOUT } from '../constants/ActionTypes';

const mapStateToProps = (state) => {
    return {};
}


export default connect(mapStateToProps, {
    logout: () => (dispatch) => {
        dispatch({
            type: LOGOUT
        })
    }
})(ListScreen);

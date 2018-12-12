import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import RouterReducer from './RouterReducer';

export default combineReducers({
    auth: AuthenticationReducer,
    router: RouterReducer
});

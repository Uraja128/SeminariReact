import { LOGIN_SUCCESS, PAGE_BACK, PAGE_CHANGE } from '../constants/ActionTypes';

const INITIAL_STATE = {
    stack: [],
    current: 'login'
};

const pageChange = (state, pageNew) => {
    if (state.current !== pageNew) {
        const newState = { ...state };
        newState.stack.push(state.current);
        newState.current = pageNew;
        return newState;
    }
    return state;
};

const pageBack = (state) => {
    if (state.stack.length > 0) {
        const newState = { ...state };
        newState.current = newState.stack.pop();
        return newState;
    }
    return state;
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAGE_CHANGE:
            return pageChange(state, action.payload.page);
        case PAGE_BACK:
            return pageBack(state);
        case LOGIN_SUCCESS:
            return pageChange(state, 'list');
        default:
            return state;
    }
};

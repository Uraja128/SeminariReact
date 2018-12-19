import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import LoginContainer from './LoginContainer';
import ListContainer from './ListContainer';
import { getUserFS } from '../selectors';
import { PAGE_CHANGE } from '../constants/ActionTypes';

class RouterManager extends Component {

    componentDidMount() {
        const { user } = this.props;
        if (user !== null) {
            this.props.goToAuthArea();
        }
    }

    render() {
        const { current } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {current === 'login' && <LoginContainer />}
                {current === 'list' && <ListContainer />}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    const { current } = state.router;
    const user = getUserFS(state);
    return { current, user };
};

const Router = connect(mapStateToProps, {
    goToAuthArea: () => (dispatch) => {
        dispatch({
            type: PAGE_CHANGE,
            payload: {
                page: 'list'
            }
        });
    }
})(RouterManager);

export default Router;

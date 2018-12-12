import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import LoginContainer from './LoginContainer';
import ListContainer from './ListContainer';

const RouterManager = ({ current }) => {
    return (
        <View>
            {current === 'login' && <LoginContainer />}
            {current === 'list' && <ListContainer />}
        </View>
    );
};

const mapStateToProps = (state) => {
    const { current } = state.router;
    return { current };
};

const Router = connect(mapStateToProps)(RouterManager);

export default Router;

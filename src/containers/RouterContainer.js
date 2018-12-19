import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import LoginContainer from './LoginContainer';
import ListContainer from './ListContainer';

const RouterManager = ({ current }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {current === 'login' && <LoginContainer />}
            {current === 'list' && <ListContainer />}
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    const { current } = state.router;
    return { current };
};

const Router = connect(mapStateToProps)(RouterManager);

export default Router;

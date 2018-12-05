// import componenti
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { store } from './Store';
import Header from './components/Header';
//import Card from './components/Card';
//import CardList from './components/CardList';
//import CardJson from './assets/json/CardJson';
import LoginContainer from './containers/LoginContainer';

// creazione componente
const App = () => {
    const { appStyle } = styles;
    return (
        <Provider store={store}>
            <View style={appStyle}>
                <Header title="Title" />
                <LoginContainer />
            </View>
        </Provider>
    );
};
//<Card>
//    <CardList data={CardJson} />
//</Card>

const styles = {
    appStyle: {
        backgroundColor: '#cccccc',
        flexGrow: 1
    }
};


// export del componente
export default App;

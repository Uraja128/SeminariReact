// import componenti
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { store } from './Store';
import Header from './components/Header';
import Card from './components/Card';
import CardList from './components/CardList';
import CardJson from './assets/json/CardJson';

// creazione componente
const App = () => {
    const { appStyle } = styles;
    return (
        <Provider store={store}>
            <View style={appStyle}>
                <Header title="Title" />
                <Card>
                    <CardList data={CardJson} />
                </Card>
            </View>
        </Provider>
    );
};

const styles = {
    appStyle: {
        backgroundColor: '#cccccc',
        flexGrow: 1
    }
};


// export del componente
export default App;

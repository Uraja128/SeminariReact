// import componenti
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import firebase from 'firebase';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store';
import Router from './containers/RouterContainer';

// creazione componente
const App = () => {
    const { appStyle } = styles;

    var config = {
        apiKey: "AIzaSyA0eEBiO4z2vb7cP3dp_JTRZ6Y93H90qwM",
        authDomain: "testapi-195020.firebaseapp.com",
        databaseURL: "https://testapi-195020.firebaseio.com",
        projectId: "testapi-195020",
        storageBucket: "testapi-195020.appspot.com",
        messagingSenderId: "780836578843"
    };
    firebase.initializeApp(config);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <View style={appStyle}>
                    <Router />
                </View>
            </PersistGate>
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

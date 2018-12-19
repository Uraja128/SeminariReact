// import componenti
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store';
import Router from './containers/RouterContainer';

// creazione componente
const App = () => {
    const { appStyle } = styles;
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

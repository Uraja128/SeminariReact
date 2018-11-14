// import componenti
import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import CardItem from './components/CardItem';

// creazione componente
const App = () => {
    const { appStyle } = styles;
    return (
        <View style={appStyle}>
            <Header title="Title" />
            <Card>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </Card>
        </View>
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

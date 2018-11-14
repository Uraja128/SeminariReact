// import componenti
import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import CardItem from './components/CardItem';
import Images from './assets/images';

// creazione componente
const App = () => {
    const { appStyle } = styles;
    return (
        <View style={appStyle}>
            <Header title="Title" />
            <Card>
                <CardItem
                    text="Item 1"
                    image={Images.cat}
                />
                <CardItem
                    text="Item 2"
                    image={Images.woman}
                />
                <CardItem
                    text="Item 3"
                    image={Images.dog}
                />
                <CardItem
                    text="Item 4"
                    image={Images.plus}
                />
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

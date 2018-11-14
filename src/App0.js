// import componenti
import React from 'react';
import { View, Text } from 'react-native';

// creazione componente
const App = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View>
            <View style={viewStyle} >
                <Text
                    selectable
                    style={textStyle}
                >He!</Text>
            </View>
            <View style={viewStyle} >
                <Text>CIao</Text>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        padding: 10,
        marginTop: 50,
        paddingBottom: 30,
        backgroundColor: '#CCCCCC'
    },
    textStyle: {
        color: 'red',
        fontSize: 30,
        fontWeight: '800'
    }
};


// export del componente
export default App;

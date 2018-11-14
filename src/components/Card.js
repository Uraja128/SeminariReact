import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
    const { cardStyle } = styles;

    return (
            <View style={cardStyle}>
                {children}
            </View>
        );
};

const styles = {
        cardStyle: {
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 15,
            padding: 15,
            backgroundColor: 'white'
        }
};

export default Card;

import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {
    const { headerStyle, textStyle } = styles;

    return (
        <View style={headerStyle} >
            <Text
                selectable
                style={textStyle}
            >{title}</Text>
        </View>
    );
};

const styles = {
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000CC',
        height: 50
    },
    textStyle: {
        color: 'white',
        fontSize: 26,
        fontWeight: '800'
    }
};

export default Header;

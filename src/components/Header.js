import React from 'react';
import { View, Text } from 'react-native';
import { Colors, Size } from '../constants';

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
        backgroundColor: Colors.bg_floor,
        height: 50
    },
    textStyle: {
        color: Colors.white,
        fontSize: Size.t_1_size,
        fontWeight: '800'
    }
};

export default Header;

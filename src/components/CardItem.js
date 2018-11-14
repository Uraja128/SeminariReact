import React from 'react';
import { View, Text, Image } from 'react-native';
import { Colors, Size } from '../constants';

const CardItem = ({ image, text }) => {
    const {
        containerStyle,
        imageStyle,
        textStyle
    } = styles;
    return (
        <View style={containerStyle}>
            <Image
              style={imageStyle}
              source={image}
            />
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        borderColor: Colors.border,
        borderWidth: 1,
        marginBottom: Size.margin
    },
    imageStyle: {
        marginLeft: Size.margin,
        marginRight: Size.margin,
        width: 45,
        height: 45
    },
    textStyle: {
        fontSize: Size.t_2_size,
        fontWeight: '800',
        lineHeight: Size.t_2_size,
        color: Colors.t_1_color
    }
};

export default CardItem;

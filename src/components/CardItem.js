import React from 'react';
import { View, Text, Image } from 'react-native';

const CardItem = () => {
    const {
        containerStyle,
        imageStyle,
        textStyle
    } = styles;
    return (
        <View style={containerStyle}>
            <Image
              style={imageStyle}
              source={{ uri: uriImage }}
            />
            <Text style={textStyle}>text</Text>
        </View>
    );
};

const uriImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';

const styles = {
    containerStyle: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        borderColor: '#dddddd',
        borderWidth: 1,
        marginBottom: 15
    },
    imageStyle: {
        marginLeft: 15,
        marginRight: 15,
        width: 45,
        height: 45
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 20
    }
};

export default CardItem;

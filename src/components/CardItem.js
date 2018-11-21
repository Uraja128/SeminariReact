import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Colors, Size } from '../constants';
import Counter from './Counter';

class CardItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    onPress = () => {
        this.setState({ selected: !this.state.selected });
    }

    render() {
        const { image, text } = this.props;
        const {
            containerStyle,
            imageStyle,
            textStyle
        } = styles;

        const containerTouchStyle =
            this.state.selected ?
                {
                    ...containerStyle,
                    ...containerStyle.selected
                } :
                {
                    ...containerStyle,
                    ...containerStyle.notSelected
                };

        return (
            <TouchableWithoutFeedback
                onPress={() => this.onPress()}
            >
                <View style={containerTouchStyle}>
                    <Image
                      style={imageStyle}
                      source={image}
                    />
                    <Text style={textStyle}>{text}</Text>
                    <Counter />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        borderColor: Colors.border,
        borderWidth: 1,
        marginBottom: Size.margin,
        notSelected: {
            backgroundColor: Colors.white
        },
        selected: {
            backgroundColor: Colors.bg_floor
        }
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

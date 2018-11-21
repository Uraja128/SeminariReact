import React, { Component } from 'react';
import { FlatList } from 'react-native';
import CardItem from './CardItem';
import Images from '../assets/images';

class CardList extends Component {
    render() {
        const { data } = this.props;
        return (
            <FlatList
                data={data}
                keyExtractor={(_, i) => i}
                renderItem={({ item: { text, img } }) => (
                        <CardItem
                            text={text}
                            image={Images[img]}
                        />
                    )
                }
            />
        );
    }
}

export default CardList;

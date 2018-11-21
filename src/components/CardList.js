import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import CardItem from './CardItem';

class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        const url = 'https://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url)
            .then((response) => {
                this.setState({ data: response.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    renderItem({ item: { title, image } }) {
        return (
                <CardItem
                    text={title}
                    image={{ uri: image }}
                />
            );
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(_, i) => i}
                renderItem={this.renderItem}
            />
        );
    }
}

export default CardList;

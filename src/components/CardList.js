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

    keyExtractor(item) { return item.title; }

    renderItem({ item }) {
        return (
                <CardItem item={item} />
            );
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

export default CardList;

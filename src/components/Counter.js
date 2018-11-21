import React, { Component } from 'react';
import { Text } from 'react-native';

class Counter extends Component {

    state = {
        counter: 1
    }

    componentDidMount() {
        setInterval(() => {
             this.setState({ counter: this.state.counter + 1 });
        }, 2000);
    }

    render() {
        //if (this.state.counter % 2) {
        //    return null;
        //}
        //return <Text>{this.state.counter}</Text>;
        return this.state.counter % 2 !== 0 &&
            <Text>{this.state.counter}</Text>;
    }
}

export default Counter;

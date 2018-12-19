import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import { Colors } from '../constants';
import CardList from '../components/CardList';
import Icon from 'react-native-vector-icons/FontAwesome';



class ListScreen extends Component {
    render () {
        const LogoutButton = () => (
            <TouchableWithoutFeedback
                onPress={() => this.props.logout()}
            >
                <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableWithoutFeedback>
        );
        return (
            <View >
                <Header
                    centerComponent={{ text: 'Album', style: { color: '#fff' } }}
                    rightComponent={LogoutButton}
                    containerStyle={{
                        backgroundColor: Colors.bg_header,
                    }}
                />
                <CardList/>
            </View>
        );
    }
}

export default ListScreen;

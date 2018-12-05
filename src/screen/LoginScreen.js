import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LoginScreen extends Component {
    render() {
        const { auth } = this.props;
        return (
            <View>
              <Text>
              {(auth.privacy.checked) &&
                  'Settato'
              }
              {(!auth.privacy.checked) &&
                  'Non Settato'
              }
              </Text>
            </View>
        );
    }
}

export default LoginScreen;

import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

class LoginScreen extends Component {
    textPressed() {
        const { auth } = this.props;
        const { setPrivacyAuth } = this.props;
        setPrivacyAuth(!auth.privacy.checked);
    }

    render() {
        const { auth } = this.props;
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => { this.textPressed(); }}
                >
                  <Text>
                  {(auth.privacy.checked) &&
                      'Settato'
                  }
                  {(!auth.privacy.checked) &&
                      'Non Settato'
                  }
                  </Text>
              </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default LoginScreen;

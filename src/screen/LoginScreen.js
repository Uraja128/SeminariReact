import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class LoginScreen extends Component {

    textPressed() {
        const { setPrivacyAuth } = this.props;
        setPrivacyAuth(!this.props.privacy.checked);
    }

    changeEmailText(email) {
        const { loginEmailChange } = this.props;
        loginEmailChange(email);
    }
    changeValueText(key, value) {
        const { loginParamChange } = this.props;
        loginParamChange(key, value);
    }

    render() {
        const { email, password, privacy } = this.props;
        return (
            <View>
                <View>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        value={email}
                        onChangeText={(value) => { this.changeValueText('email', value); }}
                        placeholder={'ciao@gmail.com'}
                        autoCorrect={false}
                    />
                    {false &&
                        <FormValidationMessage>Error message</FormValidationMessage>
                    }

                    <FormLabel>Password</FormLabel>
                    <FormInput
                        value={password}
                        secureTextEntry
                        onChangeText={(value) => { this.changeValueText('password', value); }}
                        placeholder={'password'}
                        autoCorrect={false}
                    />
                    {false &&
                    <FormValidationMessage>Error message</FormValidationMessage>
                    }
                </View>

                <TouchableWithoutFeedback
                    onPress={() => { this.textPressed(); }}
                >
                  <Text>
                  {(privacy.checked) &&
                      'Settato'
                  }
                  {(!privacy.checked) &&
                      'Non Settato'
                  }
                  </Text>
              </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default LoginScreen;

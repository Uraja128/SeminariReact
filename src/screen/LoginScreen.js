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

    render() {
        const { email, privacy } = this.props;
        return (
            <View>
                <View>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        value={email}
                        onTextChange={(value) => { this.changeEmailText(value); }}
                        placeholder={'ciao@gmail.com'}
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

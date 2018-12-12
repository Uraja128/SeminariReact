import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import {
    FormLabel,
    FormInput,
    FormValidationMessage,
    CheckBox
} from 'react-native-elements';

class LoginScreen extends Component {

    pressCheckbox() {
        const { setPrivacyAuth } = this.props;
        setPrivacyAuth(!this.props.privacy.checked);
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

                    <CheckBox
                        title='Accetta la privacy'
                        checked={privacy.checked}
                        onPress={() => this.pressCheckbox()}
                    />
                </View>
            </View>
        );
    }
}

export default LoginScreen;

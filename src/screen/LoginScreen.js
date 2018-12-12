import React, { Component } from 'react';
import { View } from 'react-native';
import {
    FormLabel,
    FormInput,
    FormValidationMessage,
    CheckBox,
    Button
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

    login() {
        const { login } = this.props;
        login();
    }

    render() {
        const { email, password, error, loading, privacy } = this.props;
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

                    <FormLabel>Password</FormLabel>
                    <FormInput
                        value={password}
                        secureTextEntry
                        onChangeText={(value) => { this.changeValueText('password', value); }}
                        placeholder={'password'}
                        autoCorrect={false}
                    />

                    <CheckBox
                        title='Accetta la privacy'
                        checked={privacy.checked}
                        onPress={() => this.pressCheckbox()}
                    />


                    {error !== '' &&
                    <FormValidationMessage>{error}</FormValidationMessage>
                    }

                    <Button
                        title='Login'
                        onPress={() => { this.login(); }}
                        loading={loading}
                    />
                </View>
            </View>
        );
    }
}

export default LoginScreen;

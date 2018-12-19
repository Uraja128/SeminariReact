import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Input,
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
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <Input
                    value={email}
                    placeholder={'Email'}
                    onChangeText={(value) => { this.changeValueText('email', value); }}
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    autoCorrect={false}
                    style={{ marginBottom: 15 }}
                    autoCapitalize={'none'}
                />
                <Input
                    value={password}
                    placeholder={'Password'}
                    onChangeText={(value) => { this.changeValueText('password', value); }}
                    leftIcon={{ type: 'font-awesome', name: 'unlock' }}
                    autoCorrect={false}
                    secureTextEntry
                    style={{ marginBottom: 15 }}
                    autoCapitalize={'none'}
                />
                <CheckBox
                    title='Accetta la privacy'
                    checked={privacy.checked}
                    onPress={() => this.pressCheckbox()}
                    style={{ marginBottom: 15 }}
                />
                <Text>{error}</Text>
                <Button
                    title='Login'
                    onPress={() => { this.login(); }}
                    loading={loading}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center',
        paddingHorizontal: 30,
    }
}

export default LoginScreen;

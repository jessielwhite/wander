import React from 'react';
import { TextInput, StyleSheet, View, Button, Image, Text, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 5,
  },
});

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }
  login() {
    console.log(this.state.email);
    console.log(this.state.password);
    this.props.navigation.navigate('Dashboard');
  }
  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Image source={logo} style={{ width: 200, height: 200, marginBottom: 50 }} />
        <Text>Placeholder for Facebook</Text>
        <Text>Placeholder for Google</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email@email.com"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          title="Log in"
          onPress={this.login}
        />
        <Button
          title="Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </KeyboardAwareScrollView>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

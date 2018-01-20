import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import logo from '../img/logo.png';
import { FormLabel, FormInput } from 'react-native-elements'
import { Button } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.signup = this.signup.bind(this);
  }
  signup() {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.username);
    this.props.navigation.navigate('Dashboard');
  }
  render() {
    return (
      <ImageBackground
        style={{
          backgroundColor: '#000000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../img/Chicago.jpg')}
      >
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Image source={logo} style={{ width: 200, height: 200, marginBottom: 30 }} />
        <FormInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          keyboardType='email-address'
          onChangeText={text => this.setState({ email: text })}
          placeholder="Enter your email address"
          placeholderTextColor='white'
        />
        <FormInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          placeholder="Enter a username"
          placeholderTextColor='white'
          onChangeText={text => this.setState({ username: text })}
        />
        <FormInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          placeholder="Enter a password"
          placeholderTextColor='white'
          secureTextEntry={true} 
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          large
          raised
          buttonStyle={{backgroundColor: '#0e416d', borderRadius: 10, marginTop: 10}}
          title="Create your account"
          onPress={this.signup}
        />
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

Signup.propTypes = {
  navigation: PropTypes.object,
};

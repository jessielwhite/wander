import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, ImageBackground, Text, KeyboardAvoidingView, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import { FormLabel, FormInput } from 'react-native-elements'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 40,
    fontWeight: 'bold',
    opacity: 0.8,
    backgroundColor: '#000000'
  },
  input: {
    marginTop: 4,
    color: 'white',
    textAlign: 'center'
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
      <ImageBackground
        style={{
          backgroundColor: '#000000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../img/NYC.jpg')}
      >
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <Image source={logo} style={{ width: 200, height: 200, marginBottom: 150 }} />
          <Text style={{ fontSize: 30, color:'white'}}>email</Text>
            <FormInput 
              style={styles.input}
              onChangeText={text => this.setState({ email: text })}
              placeholder="enter email"
              placeholderTextColor= 'gray' 
            />
          <Text style={{ fontSize: 30, color:'white'}}>password</Text>
            <FormInput 
              style={styles.input}
              onChangeText={text => this.setState({ password: text })}
              placeholder="enter password"
              placeholderTextColor= 'gray' 
            />
          
          <TouchableOpacity
            style={styles.button}
            onPress={this.login}
          >
          <Text style={{ fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={{ fontSize: 20 }}>Signup</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

import React from 'react';
import { StyleSheet, ImageBackground, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import { FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
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
    backgroundColor: '#000000',
  },
  input: {
    marginTop: 4,
    color: 'white',
    textAlign: 'center',
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
    // const settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "http://18.218.102.64/",
    //   "method": "GET",
    //   "headers": {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Cache-Control": "no-cache",
    //   },
    // }

    console.log(this.state.email);
    console.log(this.state.password);
    axios.get('http://18.218.102.64/')
      .then((res) => {
        console.log(res);
        // this.props.navigation.navigate('Dashboard');
      })
      .catch(err => console.error(err));
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
          <Image source={logo} style={{ width: 150, height: 150, marginBottom: 150 }} />
          <Text style={{ fontSize: 30, color:'white'}}>email</Text>
          <FormInput
            keyboardType="email-address"
            style={styles.input}
            onChangeText={text => this.setState({ email: text })}
            placeholder="enter email"
            placeholderTextColor="gray"
          />
          <Text style={{ fontSize: 30, color: 'white' }}>password</Text>
          <FormInput
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
            placeholder="enter password"
            placeholderTextColor= 'gray'
            secureTextEntry={true} 
          />
        
          <Button
            large
            raised
            buttonStyle={{backgroundColor: '#0e416d', borderRadius: 10, alignSelf:'flex-end', marginTop: 10}}
            onPress={this.login}
            title="login"
            icon={{name: 'home', size: 32}}
          />

          <Button
            large
            raised
            buttonStyle={{backgroundColor: '#0e416d', borderRadius: 10,  alignSelf: 'flex-end', position: 'relative', marginTop: 10}}
            onPress={() => this.props.navigation.navigate('Signup')}
            icon={{name: 'edit', size: 32}}
            title="signup"
          />
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

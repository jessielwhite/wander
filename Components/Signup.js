import React from 'react';
import { StyleSheet, ImageBackground, Image, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import logo from '../img/logo.png';
import Chicago from '../img/Chicago.jpg';
import { keys } from '../config';

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
    const user = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    };
    // this.props.navigation
    //   .dispatch(NavigationActions.reset({
    //     index: 0,
    //     actions:
    //       [NavigationActions.navigate({ routeName: 'GatherInterests' })],
    //   }));
    // Actual request commented out for testing purposes
    axios.post('http://18.218.102.64/signup', user)
      .then((res) => {
        if (res.data !== 'User was not created') {
          AsyncStorage.setItem('Token', JSON.stringify(res.data));
          this.props.navigation
            .dispatch(NavigationActions.reset({
              index: 0,
              actions:
                [NavigationActions.navigate({ routeName: 'GatherInterests' })],
            }));
        } else {
          this.props.navigation.navigate('Signup');
        }
      })
      .catch((err) => {
        console.error('signup error ', err);
      });
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
        source={Chicago}
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
            keyboardType="email-address"
            onChangeText={text => this.setState({ email: text })}
            placeholder="Enter your email address"
            placeholderTextColor="white"
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
            placeholderTextColor="white"
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
            placeholderTextColor="white"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />
          <Button
            large
            raised
            buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10, marginTop: 10 }}
            title="Create your account"
            onPress={this.signup}
          />
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

Signup.navigationOptions = () => ({
  header: null,
});

Signup.propTypes = {
  navigation: PropTypes.object,
};

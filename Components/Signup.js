import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
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
      <View style={styles.container}>
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
        />
        <Button
          large
          raised
          buttonStyle={{backgroundColor: '#0e416d', borderRadius: 10, marginTop: 10}}
          title="Create your account"
          onPress={() => this.props.navigation.navigate('GatherInterests')}
        />
      </View>
      </ImageBackground>
    );
  }
}

Signup.propTypes = {
  navigation: PropTypes.object,
};

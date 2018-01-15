import React from 'react';
import { Text, Button, View, StyleSheet, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
        <Text>Placeholder for Google sign up</Text>
        <Text>Placeholder for Facebook sign up</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          placeholder="Enter your email address"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          placeholder="Enter a username"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          placeholder="Enter a password"
        />
        <Button
          title="Create your account"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

Signup.propTypes = {
  navigation: PropTypes.object,
};

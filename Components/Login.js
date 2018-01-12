import React from 'react';
import { TextInput, StyleSheet, View, Button, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import logo from '../logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 200, height: 200, marginBottom: 50 }} />
        <Text>Placeholder for Facebook</Text>
        <Text>Placeholder for Google</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          placeholder="email@email.com"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
          }}
          placeholder="password"
        />
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button
          title="Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

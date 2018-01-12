import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';
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
        <Image source={logo} style={{ width: 100, height: 100 }} />
        <Text>Login</Text>
        <Button
          title="Go to dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
};

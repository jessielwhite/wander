import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../logo.png')} style={{ width: 100, height: 100 }} />
        <Text>Login</Text>
        <Button
          title="Go to dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
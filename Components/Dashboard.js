import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
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

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
        <Text>Dashboard</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to Gather Interests"
          onPress={() => this.props.navigation.navigate('GatherInterests')}
        />
        <Button
          title="Go to Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <Button
          title="Go to New Itinerary"
          onPress={() => this.props.navigation.navigate('NewItinerary')}
        />
        <Button
          title="Go to Itinerary"
          onPress={() => this.props.navigation.navigate('Itinerary')}
        />
      </View>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.object,
};

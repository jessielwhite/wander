import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      schedules: [],
    };
    this.signout = this.signout.bind(this);
  }
  componentWillMount() {
    // Query the database to get this user's schedules
    // Set the state with those schedules
    // Build out the button components with the schedules
  }
  signout() {
    console.log('signing out');
    // sign the user out
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={{ alignItems: 'flex-start' }}
          title="Sign out"
          onPress={this.signout}
        />
        <View style={{ alignItems: 'center' }}>
          <Image source={logo} style={{ width: 100, height: 100, marginTop: 20 }} />
          <Text>Dashboard</Text>
          <Button
            title="Go to Itinerary"
            onPress={() => this.props.navigation.navigate('Itinerary')}
          />
          <Button
            title="Plan a new trip"
            onPress={() => this.props.navigation.navigate('NewItinerary')}
          />
        </View>
      </View>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.object,
};

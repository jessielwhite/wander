import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import Trip from './Trip';
import { schedule1, schedule2 } from '../scheduleExample';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
    };
    this.signout = this.signout.bind(this);
    this.goToTrip = this.goToTrip.bind(this);
  }
  componentWillMount() {
    // Query the database to get this user's schedules
    // Set the state with those schedules
    // Build out the button components with the schedules
    this.setState({ schedules: [schedule1, schedule2] }, () => console.log(this.state.schedules));
  }
  signout() {
    console.log('signing out');
    // sign the user out
  }
  goToTrip() {
    console.log('clicked');
    this.props.navigation.navigate('Itinerary');
  }
  render() {
    const trips = this.state.schedules.map(event => (<Trip navigation={this.props.navigation} schedule={event} />));
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
          {/* <Trip navigation={this.props.navigation} /> */}
          {trips}
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

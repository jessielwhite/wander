import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import { exampleSchedule } from '../scheduleExample';
import { keys } from '../config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export default class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.handleTripSelect = this.handleTripSelect.bind(this);
    this.handleShareTrip = this.handleShareTrip.bind(this);
  }

  handleTripSelect() {
    // Commented out for testing purposes
    // axios.get(`http://18.218.102.64/${this.props.schedule.id}/schedules`)
    //   .then(res => this.props.navigation.navigate('Itinerary', { dayInfo: res }))
    //   .catch(err => console.error(err));
    this.props.navigation.navigate('Itinerary', { dayInfo: exampleSchedule });
  }

  handleShareTrip() {
    console.log('sharing trip');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.schedule.name}</Text>
        <Button
          onPress={this.handleTripSelect}
          title="View this trip"
        />
        <Button
          onPress={this.handleShareTrip}
          title="Share this trip"
        />
      </View>
    );
  }
}

Trip.propTypes = {
  navigation: PropTypes.object,
  schedule: PropTypes.object,
};

import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import { exampleSchedule } from '../scheduleExample';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.handleTripSelect = this.handleTripSelect.bind(this);
  }

  handleTripSelect() {
    // Commented out for testing purposes
    axios.get(`http://18.218.102.64/${this.props.schedule.id}/schedules`)
      .then(res => this.props.navigation.navigate('Itinerary', { dayInfo: res }))
      .catch(err => console.error(err));
    this.props.navigation.navigate('Itinerary', { dayInfo: exampleSchedule });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.schedule.name}</Text>
        <Button
          onPress={this.handleTripSelect}
          title="View this trip"
        />
      </View>
    );
  }
}

Trip.propTypes = {
  navigation: PropTypes.object,
  schedule: PropTypes.object,
};

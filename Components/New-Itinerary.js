import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Header, Text, Button } from 'react-native-elements';
import axios from 'axios';
import { keys } from '../config';
import { exampleSchedule } from '../scheduleExample';
import { getSchedule } from '../Schedule';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default class NewItinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      startDateTimePickerVisible: false,
      endDateTimePickerVisible: false,
      destination: '',
      functionStartDate: '',
      functionEndDate: '',
    };
    this.getItinerary = this.getItinerary.bind(this);
    this.showStartDateTimePicker = this.showStartDateTimePicker.bind(this);
    this.showEndDateTimePicker = this.showEndDateTimePicker.bind(this);
    this.hideStartDateTimePicker = this.hideStartDateTimePicker.bind(this);
    this.hideEndDateTimePicker = this.hideEndDateTimePicker.bind(this);
    this.handleStartDatePicked = this.handleStartDatePicked.bind(this);
    this.handleEndDatePicked = this.handleEndDatePicked.bind(this);
    this.searchPlaces = this.searchPlaces.bind(this);
  }

  getItinerary() {
    const { destination } = this.state;
    const startDate = this.state.functionStartDate;
    const endDate = this.state.functionEndDate;
    // console.log(startDate, endDate, destination);
    // const interests = ['museum', 'park', 'point_of_interest', 'music'];
    AsyncStorage.getItem('Token').then((res) => {
      const savedToken = JSON.parse(res);
      axios.get('http://18.218.102.64/user/likes', {
        headers: { authorization: savedToken },
      })
        .then((userLikes) => {
          getSchedule(startDate, endDate, destination, userLikes, (schedule) => {
            this.props.navigation.navigate('Itinerary', { dayInfo: schedule });
          });
        })
        .catch(err => console.error(err));
    // this.props.navigation.navigate('Itinerary', { dayInfo: exampleSchedule });
    });
  }

  showStartDateTimePicker() {
    this.setState({ startDateTimePickerVisible: true });
  }

  showEndDateTimePicker() {
    this.setState({ endDateTimePickerVisible: true });
  }

  hideStartDateTimePicker() {
    this.setState({ startDateTimePickerVisible: false });
  }

  hideEndDateTimePicker() {
    this.setState({ endDateTimePickerVisible: false });
  }

  handleStartDatePicked(date) {
    const startDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} 00:00:00`;
    this.setState({ startDate: date });
    this.setState({ functionStartDate: startDate });
    this.hideStartDateTimePicker();
  }

  handleEndDatePicked(date) {
    const endDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} 00:00:00`;
    this.setState({ endDate: date });
    this.setState({ functionEndDate: endDate });
    this.hideEndDateTimePicker();
  }

  searchPlaces(destination) {
    destination = destination.description
      .split('')
      .slice(0, destination.description.indexOf(','))
      .join('')
      .split(' ')
      .join('+');
    this.setState({ destination });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#0e416d"
          centerComponent={{
            text: '               wander',
            style: {
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
              width: 400,
              alignItems: 'center',
            },
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where are you Wandering?"
          minLength={2}
          autoFocus={false}
          returnKeyType="search"
          query={{
            key: keys.googlePlacesAPI,
            language: 'en',
            types: '(cities)',
          }}
          styles={{
            textInputContainer: {
              width: '100%',
              marginBottom: 10,
            },
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          debounce={200}
          onPress={this.searchPlaces}
        />
        <Text style={{ justifyContent: 'center', fontWeight: 'bold', fontSize: 18 }} >{this.state.destination.split('+').join(' ')}</Text>
        <Text h4>When are you leaving?</Text>
        <TouchableOpacity onPress={this.showStartDateTimePicker}>
          <Text style={{ color: 'blue', fontSize: 20 }}>Select a date</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.startDateTimePickerVisible}
          onConfirm={this.handleStartDatePicked}
          onCancel={this.hideStartDateTimePicker}
        />
        <Text>{`${months[this.state.startDate.getMonth()]} ${this.state.startDate.getDate()}`}</Text>
        <Text h4>When do you come back?</Text>
        <TouchableOpacity onPress={this.showEndDateTimePicker}>
          <Text style={{ color: 'blue', fontSize: 20 }}>Select a date</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.endDateTimePickerVisible}
          onConfirm={this.handleEndDatePicked}
          onCancel={this.hideEndDateTimePicker}
        />
        <Text>{`${months[this.state.endDate.getMonth()]} ${this.state.endDate.getDate()}`}</Text>
        <Button
          large
          raised
          buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10, marginTop: 10 }}
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button
          large
          raised
          buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10, marginTop: 10 }}
          title="Get my itinerary"
          onPress={this.getItinerary}
        />
      </View>
    );
  }
}

NewItinerary.propTypes = {
  navigation: PropTypes.object,
};

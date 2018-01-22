import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import logo from '../img/logo.png';
import { keys } from '../config';
import { schedule1 } from '../scheduleExample';
import { Header, Button, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class NewItinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      startDateTimePickerVisible: false,
      endDateTimePickerVisible: false,
      destination: '',
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
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.log(this.state.destination);
    const body = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      destination: this.state.destination,
    };
    axios.post('http://18.218.102.64/schedule', body)
      .then((res) => {
        console.log(res);
        this.props.navigation.navigate('Itinerary', { dayInfo: schedule1 });
      })
      .catch(err => console.error(err));
    // Build the itinerary
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
    // console.log('A start date has been picked: ', date);
    this.setState({ startDate: date });
    this.hideStartDateTimePicker();
  }

  handleEndDatePicked(date) {
    // console.log('An end date has been picked: ', date);
    this.setState({ endDate: date });
    this.hideEndDateTimePicker();
  }

  searchPlaces(destination) {
    // The city, state, and country is saved in the description key
    console.log('destination', destination.description);
    this.setState({ destination: destination.description });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={logo} style={{ width: 100, height: 100 }} /> */}
        <Header backgroundColor="#0e416d"
          centerComponent={{ text: '               wander', style: { color: 'white', fontSize: 40, fontWeight: 'bold', width: 400, alignItems: 'center' } }}
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
        <Text style={{ justifyContent: 'center', fontWeight: 'bold', fontSize: 18 }} >{this.state.destination}</Text>
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

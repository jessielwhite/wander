import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Header, Text, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';
import { keys } from '../config';
import { exampleSchedule } from '../scheduleExample';
import { getSchedule } from '../ScheduleMethods';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
      // This is the actual start date displayed on the calendar
      startDate: new Date(),
      endDate: new Date(),
      startDateTimePickerVisible: false,
      endDateTimePickerVisible: false,
      destination: '',
      // This is the formatted start date that we pass to the schedule builder function
      functionStartDate: '',
      functionEndDate: '',
      loading: false,
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

  // Called when the user clicks the get itinerary button
  getItinerary() {
    const { destination } = this.state;
    const startDate = this.state.functionStartDate;
    const endDate = this.state.functionEndDate;
    this.setState({ loading: true });
    AsyncStorage.getItem('Token')
      .then((res) => {
        const savedToken = JSON.parse(res);
        axios.get(keys.server + '/user/likes', {
          headers: { authorization: savedToken },
        })
          .then((userLikes) => {
            getSchedule(startDate, endDate, destination, userLikes.data, (schedule) => {
              this.setState({ loading: false });
              this.props.navigation.navigate('Itinerary', { dayInfo: schedule });
            });
          })
          .catch(err => console.error(err));
      });
    // this.props.navigation.navigate('Itinerary', { dayInfo: exampleSchedule });
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

  handleStartDatePicked(startDate) {
    const formattedDate = `${months[startDate.getMonth()]} ${startDate.getDate()}, ${startDate.getFullYear()} 00:00:00`;
    this.setState({ startDate });
    this.setState({ functionStartDate: formattedDate });
    this.hideStartDateTimePicker();
  }

  handleEndDatePicked(endDate) {
    const formattedDate = `${months[endDate.getMonth()]} ${endDate.getDate()}, ${endDate.getFullYear()} 00:00:00`;
    this.setState({ endDate });
    this.setState({ functionEndDate: formattedDate });
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
          statusBarProps={{ barStyle: 'light-content' }}
          outerContainerStyles={{ backgroundColor: '#0e416d', width: '100%' }}
          centerComponent={{ text: 'wander', style: { color: '#fff', fontSize: 30 } }}
          leftComponent={<Icon
            name="home"
            color="#fff"
            onPress={() => this.props.navigation
              .dispatch(NavigationActions.reset({
                index: 0,
                actions:
                  [NavigationActions.navigate({ routeName: 'Dashboard' })],
              }))}
          />}
          rightComponent={<Icon
            name="menu"
            color="#fff"
          />}
        />
        <View style={styles.container}>
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
          <ActivityIndicator
            size="large"
            color="#0000ff"
            animating={this.state.loading}
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
      </View>
    );
  }
}

NewItinerary.navigationOptions = () => ({
  header: null,
});

NewItinerary.propTypes = {
  navigation: PropTypes.object,
};
import React from 'react';
import {
  StyleSheet,
  Text,
  AsyncStorage,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import axios from 'axios';
import Event from './Event';
import { keys } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itinerary: {},
    };
    this.goToDashboard = this.goToDashboard.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);
  }

  componentWillMount() {
    // The day info should always be pulled in from the higher level
    this.setState({ itinerary: this.props.navigation.state.params.dayInfo });
  }

  goToDashboard() {
    this.props.navigation.navigate('Dashboard');
  }

  updateSchedule(schedule) {
    this.setState({ itinerary: schedule });
  }

  saveSchedule() {
    AsyncStorage.getItem('Token').then((res) => {
      const savedToken = JSON.parse(res);
      axios({
        method: 'post',
        url: keys.server + '/user/schedule',
        headers: {
          authorization: savedToken,
          'Content-Type': 'application/json',
        },
        data: { schedule: this.state.itinerary },
      })
        .then((response) => {
          console.log('schedule post response', response);
          this.props.navigation.navigate('Dashboard');
        })
        .catch((err) => {
          console.error('schedule post error', err);
        });
    });
  }

  render() {
    // Create the event components from the dayinfo
    const days = Object.keys(this.state.itinerary).filter(item => item[0] === 'd');
    const eventViews = days
      .map(day =>
        (<Event
          dayInfo={this.state.itinerary[day]}
          key={day}
          navigation={this.props.navigation}
          saveSchedule={this.saveSchedule}
        />));

    return (
      <Swiper>
        {eventViews || <Text>Loading...</Text>}
      </Swiper>
    );
  }
}

Itinerary.navigationOptions = () => ({
  header: null,
});

Itinerary.propTypes = {
  navigation: PropTypes.object,
};
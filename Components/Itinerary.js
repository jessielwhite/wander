import React from 'react';
import {
  StyleSheet,
  Text,
  AsyncStorage,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import axios from 'axios';
import Event from './Event';

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
    const getDaySchedule = (dayArr, cb) => {
      return Promise.all(dayArr.map(event => axios.get(`http://18.218.102.64/event/${event.id}`)))
        .then((res) => {
          const fullDayArr = res.map((obj) => {
            const result = obj.data;
            result.latlng = { lat: obj.latitude, lng: obj.longitutde };
            delete result.latitude;
            delete result.longitude;
            return result;
          });
          cb(fullDayArr);
        })
        .catch(err => console.error(err));
    };
    if (this.props.navigation.state.params.dayInfo.day_1.events) {
      this.setState({ itinerary: this.props.navigation.state.params.dayInfo });
    } else {
      const schedule = Object.keys(this.props.navigation.state.params.dayInfo).reduce((seed, item) => {
        seed[item] = { events: [] };
        return seed;
      }, {});
      Object.keys(this.props.navigation.state.params.dayInfo).forEach((day) => {
        getDaySchedule(this.props.navigation.state.params.dayInfo[day], (response) => {
          schedule[day].events = response;
          this.setState({ itinerary: schedule });
        });
      });
    }
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
        url: 'http://18.218.102.64/user/schedule',
        headers: {
          authorization: savedToken,
          'Content-Type': 'application/json',
        },
        data: { schedule: this.state.itinerary },
      })
        .then((response) => {
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

// Itinerary.propTypes = {
//   navigation: PropTypes.object,
// };

import React from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
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
      itinerary: [],
    };
  }

  componentWillMount() {
    // The day info should always be pulled in from the higher level
    this.setState({ itinerary: this.props.navigation.state.params.dayInfo });
  }

  render() {
    // Create the event components from the dayinfo
    const days = Object.keys(this.state.itinerary).filter(item => typeof this.state.itinerary[item] === 'object');
    const eventViews = days
      .map(day =>
        (<Event
          dayInfo={this.state.itinerary[day]}
          key={day}
          navigation={this.props.navigation}
        />));

    return (
      <Swiper>
        {eventViews}
      </Swiper>
    );
  }
}

Itinerary.propTypes = {
  navigation: PropTypes.object,
};

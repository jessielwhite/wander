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

  componentDidMount() {
    // Query the database, grab the itinerary, set state accordingly
    this.setState({ itinerary: this.props.navigation.state.params.schedule });
  }

  render() {
    const days = Object.keys(this.state.itinerary);
    console.log(days);
    const eventViews = days.map(day => (<Event dayInfo={this.state.itinerary[day]} key={day} />));
    // Create itinerary components accordingly
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

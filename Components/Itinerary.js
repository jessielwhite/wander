import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
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
      itinerary: [],
    };
  }

  componentDidMount() {
    // Query the database, grab the itinerary, set state accordingly
    axios.get(`http://18.218.102.64/schedule/${/* userid but for now */1}/events`)
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.error(err));
    this.setState({ itinerary: this.props.navigation.state.params.dayInfo });
  }

  render() {
    const days = Object.keys(this.state.itinerary).filter(item => typeof this.state.itinerary[item] === 'object');
    const eventViews = days.map(day => (<Event dayInfo={this.state.itinerary[day]} key={day} />));
    return (
      <ImageBackground
      style={{
        backgroundColor: '#000000',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
      source={require('../img/Chicago.jpg')}
      >
      <Swiper>
        {eventViews}
      </Swiper>
        </ImageBackground>
    );
  }
}

Itinerary.propTypes = {
  navigation: PropTypes.object,
};

import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import { MapView } from 'expo';
// https://github.com/react-community/react-native-maps for more information on how this library works
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
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
  constructor() {
    super();
    this.state = {
      itinerary: [],
    };
  }

  componentWillMount() {
    // Query the database, grab the itinerary, set state accordingly
  }

  render() {
    // Create itinerary components accordingly
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
        <View style={{ width: 200, height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <Event />
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

Itinerary.propTypes = {
  navigation: PropTypes.object,
};

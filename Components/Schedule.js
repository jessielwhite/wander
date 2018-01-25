<<<<<<< HEAD
import React from 'react';
import openMap from 'react-native-open-maps';
import { Button, View, StyleSheet, ScrollView } from 'react-native';
import { MapView } from 'expo';
// https://github.com/react-community/react-native-maps for more information on how this library works
<<<<<<< HEAD:Components/Schedule.js
import { List, ListItem, Header } from 'react-native-elements';
import axios from 'axios';
import { keys } from '../config';
import Schedule from './Schedule';
=======
import { ListItem, Header } from 'react-native-elements';
import { Schedule } from './SortList';
>>>>>>> d9dadafc3a3dab8f09109759d285e22f0e0da77f:Components/Event.js
=======
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import SortableList from 'react-native-sortable-list'; // 0.0.16
import Row from './Row';

const window = Dimensions.get('window');
>>>>>>> 0881239cadd66f28efe8365d87ffc52d1e4fd58a


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',

    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },
  list: {
    flex: 1,
  },
  contentContainer: {
    width: window.width,

    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },

      android: {
        paddingHorizontal: 0,
      },
    }),
  },
});

<<<<<<< HEAD
  saveTrip() {
<<<<<<< HEAD:Components/Schedule.js
    const events = this.props.dayInfo;
    // console.log(events);
=======
    // const events = this.props.dayInfo;
>>>>>>> d9dadafc3a3dab8f09109759d285e22f0e0da77f:Components/Event.js
  }

  render() {
    // console.log(this.props);
    const events = Object.keys(this.props.dayInfo);
    const eventNames = events
      .map(event =>
        (<ListItem
          key={event}
          title={this.props.dayInfo[event].name}
          onPress={this.openNewMap}
          id={this.props.dayInfo[event].location}
        />));
    const eventCoordinates = events.map((event) => ({
        title: this.props.dayInfo[event].name,
        coordinates: this.props.dayInfo[event].location,
      }));
    const eventMarkers = eventCoordinates
      .map(coor =>
        (<MapView.Marker coordinate={coor.coordinates} title={coor.title} key={coor.title} />));
    const startingPoint = {
      latitude: this.props.dayInfo[0].location.latitude,
      longitude: this.props.dayInfo[0].location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#0e416d"
          centerComponent={{ text: 'wander', style: { color: 'white', fontSize: 40, fontWeight: 'bold' } }}
        />
        {/* <Image source={logo} style={{ width: 100, height: 100 }} /> */}
        <View style={{ width: 400, height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={startingPoint}
          >
            {eventMarkers}
          </MapView>
        </View>
        <ScrollView>


          <Schedule
            data={this.props.dayInfo}
          />

        </ScrollView>
        <Button
          title="Save your Trip Recommendations"
          onPress={this.saveTrip}
        />
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard', { created: true })}
        />

=======
export default class Schedule extends Component {
  _renderRow({ data, active }) {
    return <Row data={data} active={active} />
  }

  render() {
    return (
      <View style={styles.container}>
        <SortableList
          autoscrollAreaSize={1000}
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={this.props.data.events}
          renderRow={this._renderRow}
        />
>>>>>>> 0881239cadd66f28efe8365d87ffc52d1e4fd58a
      </View>
    );
  }
}

Schedule.propTypes = {
  navigation: PropTypes.object,
<<<<<<< HEAD
};
=======
};
>>>>>>> 0881239cadd66f28efe8365d87ffc52d1e4fd58a

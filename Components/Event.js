import React from 'react';
import openMap from 'react-native-open-maps';
import { Button, View, StyleSheet, Image, ScrollView } from 'react-native';
import { MapView } from 'expo';
// https://github.com/react-community/react-native-maps for more information on how this library works

import { List, ListItem, Header, Icon, Text } from 'react-native-elements';

import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { keys } from '../config';
import Schedule from './Schedule';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shedule: {
    height: '80%',
  },
});


export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.openNewMap = this.openNewMap.bind(this);
  }

  
  openNewMap(event) {
    // openMap({ latutude: 40.7128, longitude: -74.0060 });
  }

  saveTrip() {
    // const events = this.props.dayInfo;
  }
  
  render() {
    const eventCoordinates = this.props.dayInfo.events.map((event) => { 
      return {
        title: event.name,
        coordinates: { latitude: event.latlng.lat, longitude: event.latlng.lng },
      };
    });
    const eventMarkers = eventCoordinates
      .map(coor =>
        (<MapView.Marker coordinate={coor.coordinates} title={coor.title} key={coor.title} />));
    const startingPoint = {
      latitude: this.props.dayInfo.events[0].latlng.lat,
      longitude: this.props.dayInfo.events[0].latlng.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return (
      <View style={styles.container}>
        <Header
          style={{ height: 35 }}
          statusBarProps={{ barStyle: 'light-content' }}
          outerContainerStyles={{ backgroundColor: '#0e416d', }}
          centerComponent={{ text: 'wander', style: { color: '#fff', fontSize: 28, height: 30 } }}
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

        <View style={{ width: 400, height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={startingPoint}
          >
            {eventMarkers}
          </MapView>
        </View>

        <ScrollView>
          <Text h4 center>   Sort and Edit Your Scheudle</Text>

          <Schedule
            data={this.props.dayInfo}
          />

        <Button
          title="Save your Trip Recommendations"
          onPress={this.saveTrip}
          />
          </ScrollView>
      </View>
    );
  }
}

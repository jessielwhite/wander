import React from 'react';
import openMap from 'react-native-open-maps';
import { Button, View, StyleSheet, Image, ScrollView } from 'react-native';
import { MapView } from 'expo';
// https://github.com/react-community/react-native-maps for more information on how this library works
import { List, ListItem, Header } from 'react-native-elements';
import axios from 'axios';
import { keys } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.openNewMap = this.openNewMap.bind(this);
  }

  componentWillMount() {
    console.log(this.props.dayInfo);
    this.props.dayInfo.forEach((obj) => {
      if (obj.googleId) {
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${obj.googleId}&key=${keys.googleMapsAPI}`)
          .then(res => console.log(res))
          .catch(err => console.error(err));
      }
    });
  }

  openNewMap(event) {
    // console.log('id', event.id);
    // openMap({ latutude: 40.7128, longitude: -74.0060 });
  }

  saveTrip() {
    const events = this.props.dayInfo;
    // console.log(events);
  }


  render() {
    const events = Object.keys(this.props.dayInfo);
    const eventNames = events
      .map(event =>
        (<ListItem
          key={event}
          title={this.props.dayInfo[event].name}
          onPress={this.openNewMap}
          id={this.props.dayInfo[event].location}
        />));
    const eventCoordinates = events.map((event) => { 
      return {
        title: this.props.dayInfo[event].name,
        coordinates: this.props.dayInfo[event].location,
      };
    });
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
          <List>
            {eventNames}
          </List>
        </ScrollView>
        <Button
          title="Save your Trip Recommendations"
          onPress={this.saveTrip}
        />
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard', { created: true })}
        />

      </View>
    );
  }
}

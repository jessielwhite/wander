import React from 'react';
import openMap from 'react-native-open-maps';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import { MapView } from 'expo';
// https://github.com/react-community/react-native-maps for more information on how this library works
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.openNewMap = this.openNewMap.bind(this);
  }

  openNewMap() {
    // Get the coordinates out of the event's info
    openMap({ latutude: 40.7128, longitude: -74.0060 });
  }

  render() {
    const events = Object.keys(this.props.dayInfo);
    const eventNames = events.map((event, i) => (<Text key={`day${i}`} >{this.props.dayInfo[event].name}</Text>));
    const eventCoordinates = events.map((event) => {
      if (event[0] === 'e') {
        console.log('event found', event);
        return { title: this.props.dayInfo[event].name, coordinates: { latitude: Number(this.props.dayInfo[event].geometry.location.lat), longitude: Number(this.props.dayInfo[event].geometry.location.lng) } };
      } else if (event[0] === 'r') {
        console.log('restaurant found', event);
        return { title: this.props.dayInfo[event].restaurant.name, coordinates: { latitude: Number(this.props.dayInfo[event].restaurant.location.latitude), longitude: Number(this.props.dayInfo[event].restaurant.location.latitude) }};
      }
    });
    const eventMarkers = eventCoordinates.map(coor => (<MapView.Marker coordinate={coor.coordinates} title={coor.title} />));
    const startingPoint = {
      latitude: this.props.dayInfo.event1.geometry.location.lat,
      longitude: this.props.dayInfo.event1.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    // console.log(eventMarkers);
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
        <View style={{ width: 200, height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={startingPoint}
          >
            {eventMarkers}
          </MapView>
        </View>
        {eventNames}
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}
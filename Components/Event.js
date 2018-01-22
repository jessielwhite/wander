import React from 'react';
import openMap from 'react-native-open-maps';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { List, ListItem, Header } from 'react-native-elements';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import { MapView } from 'expo';
// https://github.com/react-community/react-native-maps for more information on how this library works
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    const eventNames = events.map((event, i) => (<ListItem key={`day${i}`} title={this.props.dayInfo[event].name}></ListItem>));
    const eventCoordinates = events.map((event) => { 
      return { title: this.props.dayInfo[event].name, coordinates: this.props.dayInfo[event].location };
    });
    const eventMarkers = eventCoordinates.map(coor => (<MapView.Marker coordinate={coor.coordinates} title={coor.title} key={coor.title} />));
    const startingPoint = {
      latitude: this.props.dayInfo[0].location.latitude,
      longitude: this.props.dayInfo[0].location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return (
      <View style={styles.container}>
        {/* <Image source={logo} style={{ width: 400, height: 100 }} /> */}
        <Header backgroundColor='#0e416d'
          centerComponent={{ text: 'wander', style: {color: 'white', fontSize: 40, fontWeight: 'bold' } }}
        />
        <View style={{ width: 400, height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={startingPoint}
          >
            {eventMarkers}
          </MapView>
        </View>
        <List>
        {eventNames}
        </List>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard', { created: true })}
        />
      </View>
    );
  }
}
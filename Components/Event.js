import React from 'react';
import openMap from 'react-native-open-maps';
<<<<<<< HEAD
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
=======
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import { MapView } from 'expo';
// https://github.com/react-community/react-native-maps for more information on how this library works
import logo from '../img/logo.png';
>>>>>>> 4753ddd2cf989900cf544bddc7e5f6793e4cd8d9

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
<<<<<<< HEAD
  }

  openNewMap() {
    // Get the coordinates out of the event's info
    openMap({ latutude: 40.7128, longitude: -74.0060 });
  }

=======
  }

  openNewMap() {
    // Get the coordinates out of the event's info
    openMap({ latutude: 40.7128, longitude: -74.0060 });
  }

>>>>>>> 4753ddd2cf989900cf544bddc7e5f6793e4cd8d9
  render() {
    const events = Object.keys(this.props.dayInfo);
    const eventNames = events.map((event, i) => (<Text key={`day${i}`} >{this.props.dayInfo[event].name}</Text>))
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <TouchableOpacity onPress={this.openNewMap} ><Text>Event</Text></TouchableOpacity>
=======
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
        {eventNames}
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
>>>>>>> 4753ddd2cf989900cf544bddc7e5f6793e4cd8d9
      </View>
    );
  }
}
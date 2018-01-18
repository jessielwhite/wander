import React from 'react';
import openMap from 'react-native-open-maps';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});


export default class Event extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.openNewMap = this.openNewMap.bind(this);
  }

  openNewMap() {
    // Get the coordinates out of the event's info
    openMap({ latutude: 40.7128, longitude: -74.0060 });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openNewMap} ><Text>Event</Text></TouchableOpacity>
      </View>
    );
  }
}
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Event</Text>
      </View>
    );
  }
}

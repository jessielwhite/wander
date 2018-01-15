import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default class Trip extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Trip view</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Itinerary')}
          title="View this trip"
        />
      </View>
    );
  }
}

Trip.propTypes = {
  navigation: PropTypes.object,
};

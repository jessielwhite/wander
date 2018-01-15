import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import { MapView } from 'expo';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Itinerary extends React.Component {
  render() {
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
        <Text>Map goes here</Text>
        <Text>Itinerary</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Image source={logo} style={{ width: 100, height: 100 }} />
  //       <MapView
  //         style={{ flex: 1 }}
  //         initialRegion={{
  //           latitude: 37.78825,
  //           longitude: -122.4324,
  //           latitudeDelta: 0.0922,
  //           longitudeDelta: 0.0421,
  //         }}
  //       />
  //       <Text>Map goes here</Text>
  //       <Text>Itinerary</Text>
  //       <Button
  //         title="Go to Dashboard"
  //         onPress={() => this.props.navigation.navigate('Dashboard')}
  //       />
  //     </View>
  //   );
  // }
}

Itinerary.propTypes = {
  navigation: PropTypes.object,
};

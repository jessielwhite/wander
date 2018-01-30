import React from 'react';
import { Button, View, ScrollView } from 'react-native';
import { MapView } from 'expo';
import { Header, Icon, Text } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Schedule from './Schedule';
import { styles } from './Styles';

export default class Event extends React.Component {
  componentWillMount() {
    const seen = {};
    this.props.dayInfo.events.forEach((item, i) => {
      if (seen[item.name]) {
        this.props.dayInfo.events.splice(i, 1);
      } else {
        seen[item.name] = true;
      }
    });
  }

  render() {
    let eventMarkers;
    let startingPoint = {
      latitude: 40.741231,
      longitude: -74.00670099999999,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    if (this.props.dayInfo.events.length) {
      const eventCoordinates = this.props.dayInfo.events.map((event, i) => { 
        return {
          title: event.name,
          coordinates: { latitude: event.latlng.lat, longitude: event.latlng.lng },
        };
      });
      eventMarkers = eventCoordinates
        .map(coor =>
          (<MapView.Marker coordinate={coor.coordinates} title={coor.title} key={coor.title} />));
      startingPoint = {
        latitude: this.props.dayInfo.events[0].latlng.lat,
        longitude: this.props.dayInfo.events[0].latlng.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    }
    return (
      <View style={styles.eventContainer}>
        <Header
          style={{ height: 35 }}
          statusBarProps={{ barStyle: 'light-content' }}
          outerContainerStyles={{ backgroundColor: '#0e416d' }}
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
        />

        <View style={{ width: 400, height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={startingPoint || { latitude: 40.7128, longitude: -74.0060 }}
          >
            {eventMarkers}
          </MapView>
        </View>

        <ScrollView>
          <Text h4 center>   Sort and Edit Your Scheudle</Text>
          {
            this.props.dayInfo.events.length ?
              <Schedule
                data={this.props.dayInfo}
              />
            :
              <Text>Loading</Text>
          }

          <Button
            title="Save your Trip Recommendations"
            onPress={this.props.saveSchedule}
          />
        </ScrollView>
      </View>
    );
  }
}

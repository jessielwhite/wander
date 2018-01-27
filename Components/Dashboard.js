import React from 'react';
import { Text, View, StyleSheet, ImageBackground, AsyncStorage, Alert } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import Drawer from 'react-native-drawer';
import PropTypes from 'prop-types';
import axios from 'axios';
import Trip from './Trip';
import goldenGate from '../img/GoldenGate.jpg';
import { keys } from '../config';
import { dashboardExample } from '../scheduleExample';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
      invitedSchedules: [],
    };
    this.signout = this.signout.bind(this);
    this.acceptTrip = this.acceptTrip.bind(this);
    this.rejectTrip = this.rejectTrip.bind(this);
  }

  componentWillMount() {
    // Query the database to get this user's schedules
    // axios.get('http://18.218.102.64/userid/schedules')
    //   .then((res) => {
    //     console.log(res);
    //     res.data.forEach((schedule) => {
    //       if (schedule.status === 'creator') {
    //         this.setState({ createdSchedules: createdSchedules.concat(schedule) });
    //       } else if (schedule.status === 'invited') {
    //         this.setState({ invitedSchedules: invitedSchedules.concat(schedule) });
    //       } else if (schedule.status === 'attending') {
    //         this.setState({ attendingSchedules: attendingSchedules.concat(schedule) });
    //       }
    //     });
    //   })
    //   .catch(err => console.error(err));
    const attending = [];
    const invited = [];
    dashboardExample.forEach((schedule) => {
      if (schedule.status === 'invited') {
        invited.push(schedule);
      } else if (schedule.status === 'attending' || schedule.status === 'creator') {
        attending.push(schedule);
      }
    });
    this.setState({ schedules: attending });
    this.setState({ invitedSchedules: invited });
  }

  componentDidMount() {
    this.state.invitedSchedules.forEach((schedule) => {
      Alert.alert(
        'You\'ve been invited on a trip!',
        `Would you like to join on this trip to ${schedule.name}?`,
        [
          { text: 'Yes!', onPress: () => this.acceptTrip(schedule) },
          { text: 'No thanks', onPress: () => this.rejectTrip(schedule) },
        ],
      );
    });
  }

  acceptTrip(trip) {
    axios.post('http://18.218.102.64/accept_invite', { scheduleId: trip.id, accepted: true })
      .then((success) => {
        this.setState({ schedules: this.state.schedules.concat(trip) });
      })
      .catch(err => console.error(err));
  }

  rejectTrip(trip) {
    axios.post('http://18.218.102.64/accept_invite', { scheduleId: trip.id, accepted: false })
      .then(success => console.log(success))
      .catch(err => console.error(err));
  }

  signout() {
    console.log('signing out');
    axios.get('http://18.218.102.64/logout')
      .then((res) => {
        console.log(res);
        AsyncStorage.removeItem('Token');
        this.props.navigation.navigate('Login');
      })
      .catch(err => console.error(err));
  }

  render() {
    // Build out the trip components from the schedules recieved from the database
    const trips = this.state.schedules
      .map(event =>
        (<Trip
          style={{ borderWidth: 1, borderColor: 'black' }}
          navigation={this.props.navigation}
          schedule={event}
          key={event.name}
        />));
    return (
      <ImageBackground
        style={{
          backgroundColor: '#000000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={goldenGate}
      >
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          outerContainerStyles={{ backgroundColor: '#0e416d' }}
          centerComponent={{ text: 'wander', style: { color: '#fff', fontSize: 30 } }}
          leftComponent={<Icon
            name="home"
            color="#fff"
          />}
          rightComponent={<Icon
            name="menu"
            color="#fff"
          />}
        />
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home</Text>
            {trips}
            <Button
              title="Plan a new trip"
              buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10 }}
              onPress={() => this.props.navigation.navigate('NewItinerary')}
            />
          </View>
          <Button
            small
            raised
            buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10 }}
            style={{ alignItems: 'flex-end', position: 'absolute', bottom: -100 }}
            title="Sign out"
            onPress={this.signout}
          />
        </View>
      </ImageBackground>
    );
  }
}

Dashboard.navigationOptions = () => ({
  header: null,
});

Dashboard.propTypes = {
  navigation: PropTypes.object,
};

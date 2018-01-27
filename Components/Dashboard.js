import React from 'react';
import { Text, View, StyleSheet, ImageBackground, AsyncStorage, Alert } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import Drawer from 'react-native-drawer';
import { NavigationActions } from 'react-navigation';
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
    // Since setState is async, we need to temporarily store the schedules,
    // then put them in state at the end
    // AsyncStorage.getItem('Token')
    //   .then((res) => {
    //     const savedToken = JSON.parse(res);
    //     return axios.get('http://18.218.102.64/user/schedules', {
    //       headers: { authorization: savedToken },
    //     })
    //       .then((response) => {
    //         console.log(response);
    //         this.setState({ schedules: response.data });
    //       })
    //       .catch(err => console.error(err));
    //   });
    const attending = [];
    const invited = [];
    AsyncStorage.getItem('Token')
      .then((res) => {
        const savedToken = JSON.parse(res);
        return axios.get('http://18.218.102.64/dashboard', { headers: { authorization: JSON.parse(savedToken) } });
      })
      .then((res) => {
        console.log(res);
        res.data.forEach((schedule) => {
          if (schedule.status === 'invited') {
            invited.push(schedule);
          } else if (schedule.status === 'attending' || schedule.status === 'creator') {
            attending.push(schedule);
          }
        });
      })
      .catch(error => console.error(error));
    // dashboardExample.forEach((schedule) => {
    //   if (schedule.status === 'invited') {
    //     invited.push(schedule);
    //   } else if (schedule.status === 'attending' || schedule.status === 'creator') {
    //     attending.push(schedule);
    //   }
    // });
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
    AsyncStorage.getItem('Token')
      .then(token => axios.post('http://18.218.102.64/accept_invite', { scheduleId: trip.id, accepted: true, headers: { authorization: token } }))
      .then(() => {
        this.setState({ schedules: this.state.schedules.concat(trip) });
      })
      .catch(err => console.error(err));
  }

  rejectTrip(trip) {
    AsyncStorage.getItem('Token')
      .then(token => axios.post('http://18.218.102.64/accept_invite', { scheduleId: trip.id, accepted: false, headers: { authorization: token } }))
      .then(success => console.log(success))
      .catch(err => console.error(err));
  }

  signout() {
    axios.get('http://18.218.102.64/logout')
      .then(() => {
        AsyncStorage.removeItem('Token');
        this.props.navigation
          .dispatch(NavigationActions.reset({
            index: 0,
            actions:
              [NavigationActions.navigate({ routeName: 'Login' })],
          }));
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

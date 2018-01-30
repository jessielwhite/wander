import React from 'react';
import { Text, View, ImageBackground, AsyncStorage, Alert } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';
import PropTypes from 'prop-types';
import Trip from './Trip';
import goldenGate from '../img/GoldenGate.jpg';
import { styles } from './Styles';

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
    AsyncStorage.getItem('Token')
      .then((res) => {
        const savedToken = JSON.parse(res);
        return axios.get('http://18.218.102.64/dashboard', { headers: { authorization: savedToken } });
      })
      .then((res) => {
        res.data.forEach((userSchedule) => {
          axios.get(`http://18.218.102.64/schedule/${userSchedule.id_schedule}`)
            .then((response) => {
              const schedule = response.data;
              const fullSchedule = {
                id: userSchedule.id_schedule,
                status: userSchedule.status,
                name: schedule.name,
              };
              if (fullSchedule.status === 'invited') {
                this.setState({
                  invitedSchedules: this.state.invitedSchedules.concat([fullSchedule]),
                });
              } else if (fullSchedule.status === 'attending' || fullSchedule.status === 'creator') {
                this.setState({ schedules: this.state.schedules.concat([fullSchedule]) });
              }
            })
            .catch(err => console.error('error', err));
        });
      })
      .catch(error => console.error('error', error));
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
          navigation={this.props.navigation}
          schedule={event}
          key={event.name}
        />));
    return (
      <ImageBackground
        style={styles.dashboardImageBackground}
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
        />
        <View style={styles.dashboardContainer}>
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
          <Button
            title="Scan a QR code"
            onPress={() => this.props.navigation.navigate('QRScanner')}
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

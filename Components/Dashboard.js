import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Header } from 'react-native-elements';
import axios from 'axios';
import logo from '../img/logo.png';
import Trip from './Trip';
import { schedule1, schedule2 } from '../scheduleExample';
import goldenGate from '../img/GoldenGate.jpg';

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
    };
    this.signout = this.signout.bind(this);
    this.goToTrip = this.goToTrip.bind(this);
  }

  componentWillMount() {
    // Query the database to get this user's schedules
    // axios.get('http://18.218.102.64/userid/schedules')
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({ schedules: res.data });
    //   })
    //   .catch(err => console.error(err));
    this.setState({ schedules: [schedule1, schedule2] });
  }

  signout() {
    // console.log('signing out');
    axios.get('http://18.218.102.64/logout')
      .then((res) => {
        // console.log(res);
        this.props.navigation.navigate('Login');
      })
      .catch(err => console.error(err));
  }

  goToTrip() {
    // axios.get('http://18.218.102.64/schedule')
    //   .then((res) => {
    //     console.log(res);
      // this.props.navigation.navigate('Itinerary', { dayInfo: this.state.schedules[0] });
      // })
      // .catch(err => console.error(err));
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
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Header
              backgroundColor="#0e416d"
              centerComponent={{
                text: '                wander',
                style: {
                  color: 'white',
                  fontSize: 40,
                  fontWeight: 'bold',
                  width: 400,
                  alignItems: 'center',
                },
              }}
            />
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

Dashboard.propTypes = {
  navigation: PropTypes.object,
};

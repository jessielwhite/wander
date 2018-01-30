import React from 'react';
import { Text, View, StyleSheet, ImageBackground, AsyncStorage, Alert } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { BarCodeScanner, Permissions } from 'expo';
import PropTypes from 'prop-types';
import axios from 'axios';
import Trip from './Trip';
import goldenGate from '../img/GoldenGate.jpg';
<<<<<<< HEAD
import { keys } from '../config';
import { dashboardExample } from '../scheduleExample';
import { RNS3 } from 'react-native-aws3';
import { ImagePicker } from 'expo';

const s3Options = {
  keyPrefix: "uploads/",
  bucket: keys.s3Bucket,
  region: "us-east-2",
  accessKey: keys.s3AccessKey,
  secretKey: keys.s3SecretKey,
  successActionStatus: 201
}
=======
>>>>>>> 432da5432971c96754be9f4623a48d2ba1ed1b44

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
    AsyncStorage.getItem('Token')
      .then((res) => {
        const savedToken = JSON.parse(res);
        return axios.get('http://18.218.102.64/dashboard', { headers: { authorization: savedToken } });
      })
      .then((res) => {
        // Take each schedule and query the database to get the full name
        res.data.forEach((userSchedule) => {
          axios.get(`http://18.218.102.64/schedule/${userSchedule.id_schedule}`)
            .then((response) => {
              const schedule = response.data;
              const fullSchedule = { id: userSchedule.id_schedule, status: userSchedule.status, name: schedule.name };
              if (fullSchedule.status === 'invited') {
                this.setState({ invitedSchedules: this.state.invitedSchedules.concat([fullSchedule]) });
              } else if (fullSchedule.status === 'attending' || fullSchedule.status === 'creator') {
                this.setState({ schedules: this.state.schedules.concat([fullSchedule]) });
              }
            })
            .catch(err => console.error('error', err));
        });
      })
      .catch(error => console.error('error', error));

      // const self = this;
      // console.log(self.state.photos);
      // axios.get('http://18.218.102.64/photos')
      //   .then((response) => {
      //     let photos = response.data;
  
      //     if (Array.isArray(photos) && photos.length > 0) {
      //       self.setState({ avatarUrl: photos[0].url });
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
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
      .then((res) => {
        console.log(res.data);
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

  _pickImage = async () => {
		// open the image picker
		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		// result includes details about the image
		// console.log('RESULT', result);

    result.name = 'avatar';
    result.contentType = result.type;

		// save the image to S3
		RNS3.put(result, s3Options).then(response => {
		  if (response.status !== 201)
		    throw new Error('Failed to upload image to S3');
		  console.log(response.body);

			 const s3Photo = {
				 url: response.body.postResponse.location,
				//  id_user: response.body.data.id_user, //need to get the current user id... how?
			 };
      //  console.log(s3Photo);
      this.setState({ avatarUrl: s3Photo.url });

			 axios.post('http://18.218.102.64/photo', { s3Photo })
				 .then((image) => {
					 console.log(image);
				 })
				 .catch((err) => {
					 console.log('Error posting image to db ', err);
				 });
		});

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};

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
          backgroundColor: 'transparent',
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
        />
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home</Text>
            <Button
            buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10 }}
						title="Add a user avatar"
            onPress={this._pickImage}
					/>
          </View>
            {trips}
            <Button
              title="Plan a new trip"
              buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10 }}
              onPress={() => this.props.navigation.navigate('NewItinerary')}
            />
          </View>
          <Button
            // small
            // raised
            buttonStyle={{ backgroundColor: '#0e416d', borderRadius: 10 }}
            // style={{ alignItems: 'flex-end', position: 'absolute', bottom: -100 }}
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

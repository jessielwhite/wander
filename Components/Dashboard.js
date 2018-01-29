
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
    //     return axios.get(keys.server + '/user/schedules', {
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
        return axios.get(keys.server + '/dashboard', { headers: { authorization: savedToken } });
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

      const self = this;
      console.log(self.state.photos);
      axios.get(keys.server + '/photos')
        .then((response) => {
          // console.log(response);
          self.setState({ avatarUrl: response.url });
        })
        .catch((error) => {
          console.error(error);
        });
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
      .then(token => axios.post(keys.server + '/accept_invite', { scheduleId: trip.id, accepted: true, headers: { authorization: token } }))
      .then(() => {
        this.setState({ schedules: this.state.schedules.concat(trip) });
      })
      .catch(err => console.error(err));
  }

  rejectTrip(trip) {
    AsyncStorage.getItem('Token')
      .then(token => axios.post(keys.server + '/accept_invite', { scheduleId: trip.id, accepted: false, headers: { authorization: token } }))
      .then(success => console.log(success))
      .catch(err => console.error(err));
  }

  signout() {
    axios.get(keys.server + '/logout')
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

	_pickImage = async () => {
		// open the image picker
		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		// result includes details about the image
		console.log('RESULT', result);

    result.name = 'avatar';
    result.contentType = result.type;

		// save the image to S3
		RNS3.put(result, s3Options).then(response => {
		  if (response.status !== 201)
		    throw new Error('Failed to upload image to S3');
		  console.log(response.body);
		  /**
		   * {
		   *   postResponse: {
		   *     bucket: "your-bucket",
		   *     etag : "9f620878e06d28774406017480a59fd4",
		   *     key: "uploads/image.png",
		   *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
		   *   }
		   * }
		   */
			 const s3Photo = {
				 url: response.body.postResponse.location,
				 id_user: response.body.data.id_user, //need to get the current user id... how?
			 };
			 console.log(s3Photo);
			 axios.post(keys.server + '/photo', s3Photo)
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
						<Button
							title="Add a user avatar"
							onPress={this._pickImage}
						/>
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
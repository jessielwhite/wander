import React from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { FormInput, Button } from 'react-native-elements';
import QRCode from 'react-native-qrcode';
import PropTypes from 'prop-types';
import axios from 'axios';
import { exampleSchedule } from '../scheduleExample';
import { keys } from '../config';
import { styles } from './Styles';


export default class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      email: '',
    };
    this.handleTripSelect = this.handleTripSelect.bind(this);
    this.showModal = this.showModal.bind(this);
    this.addByEmail = this.addByEmail.bind(this);
  }

  handleTripSelect() {
    // Commented out for testing purposes
    // axios.get(`http://18.218.102.64/${this.props.schedule.id}/schedules`)
    //   .then(res => this.props.navigation.navigate('Itinerary', { dayInfo: res }))
    //   .catch(err => console.error(err));
    this.props.navigation.navigate('Itinerary', { dayInfo: exampleSchedule });
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  addByEmail() {
    const body = { userEmail: this.state.email, scheduleId: this.props.schedule.id };
    axios.post('http://18.218.102.64/join_schedule', body)
      .then(() => {
        this.hideModal();
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.tripContainer}>
        <Modal
          visible={this.state.modalVisible}
          animationType="fade"
          onRequestClose={() => this.hideModal()}
          transparent
        >
          <View style={styles.tripModal}>
            <Text
              style={styles.tripModalText}
            >Share with a friend by entering their email address here:
            </Text>
            <FormInput
              keyboardType="email-address"
              onChangeText={text => this.setState({ email: text })}
              placeholder="enter email"
              placeholderTextColor="white"
              inputStyle={{ color: 'white' }}
              autoCapitalize="none"
            />
            <Button
              buttonStyle={{
                backgroundColor: '#0e416d',
                borderRadius: 10,
              }}
              onPress={this.addByEmail}
              title="Send request"
            />
            <Text style={styles.tripModalText}>Share with QR code</Text>
            <QRCode
              value={this.props.schedule.id}
              size={200}
              bgColor="black"
              fgColor="white"
            />
            <Text style={styles.tripModalText}>Share on social media</Text>
            <Button
              large
              raised
              buttonStyle={{
                backgroundColor: '#0e416d',
                borderRadius: 10,
              }}
              icon={{ name: 'home', size: 32 }}
              onPress={() => this.hideModal()}
              title="Back to homescreen"
            />
          </View>
        </Modal>
        <Text>{this.props.schedule.name}</Text>
        <Button
          buttonStyle={{
            backgroundColor: '#0e416d',
            borderRadius: 10,
          }}
          onPress={this.handleTripSelect}
          title="View this trip"
        />
        <Button
          buttonStyle={{
            backgroundColor: '#0e416d',
            borderRadius: 10,
          }}
          onPress={this.showModal}
          title="Share this trip"
        />
      </View>
    );
  }
}

Trip.propTypes = {
  navigation: PropTypes.object,
  schedule: PropTypes.object,
};

import React from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  Image,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default class NewItinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenDate: new Date(),
      visibility: false,
    };
    this.setDate = this.setDate.bind(this);
    this.showDateTimePicker = this.showDateTimePicker.bind(this);
    this.hideDateTimePicker = this.hideDateTimePicker.bind(this);
  }
  setDate(chosenDate) {
    this.setState({ chosenDate });
    console.log(chosenDate);
    this.hideDateTimePicker();
  }

  showDateTimePicker() {
    this.setState({ visibility: true });
  }

  hideDateTimePicker() {
    this.setState({ visibility: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
        <TextInput
          style={{
            height: 100,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 5,
          }}
          placeholder="Where are you wandering?"
        />
        <Text>When are you leaving?</Text>
        <TouchableOpacity onPress={this.showDateTimePicker}>
          <Text>Select a date</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.visibility}
          onConfirm={this.setDate}
          onCancel={this.hideDateTimePicker}
        />
        <Text>When do you come back?</Text>
        <TouchableOpacity onPress={this.showDateTimePicker}>
          <Text>Select a date</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.visibility}
          onConfirm={this.setDate}
          onCancel={this.hideDateTimePicker}
        />
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

NewItinerary.propTypes = {
  navigation: PropTypes.object,
};

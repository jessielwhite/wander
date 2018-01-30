import React from 'react';
import {
  Animated,
  Easing,
  Dimensions,
  Platform,
  View,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, Icon, Text, Card, FormInput } from 'react-native-elements';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TextField } from 'react-native-material-textfield';
import axios from 'axios';
import { keys } from '../config';
import { styles } from './Styles';

const window = Dimensions.get('window');

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extraData: {},
      modalVisible: false,
      isDateTimePickerVisible: false,
      time: '',
      text: '',
    };

    this._active = new Animated.Value(0);

    this._style = {
      ...Platform.select({
        ios: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          }],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.07],
            }),
          }],
          elevation: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      }),
    };
  }

  componentWillMount() {
    if (this.props.data.placeId) {
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${this.props.data.placeId}&key=${keys.googleMapsAPI}`)
      .then((res) => {
        this.setState({ extraData: res.data.result });
        // console.log(res.data);
        })
        .catch(err => console.error('google api error', err));
      }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active),
      }).start();
    }
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  _showDateTimePicker() {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked(time) {
    this.setState({ time });
    this._hideDateTimePicker();
  }


  render() {
    const { data } = this.props;
    const { text } = this.state;
    const { time } = this.state;
    const modalInfo = this.state.extraData || {};
    let openHoursText;

    if (modalInfo.opening_hours !== undefined || null) {
      openHoursText = modalInfo.opening_hours.weekday_text.map(item => (<Text>{item}</Text>))
    }

    return (
      <Animated.View style={[
          styles.row,
          this._style,
        ]}
      >
        <Icon
          name="plus-circle"
          type="font-awesome"
          color="#f50"
          style={{ padding: 2 }}
          onPress={() => {
            this.openModal()
            }
          }
        />
        <View>
          <Modal
            visible={this.state.modalVisible}

            animationType={'slide'}

            onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Card title={modalInfo.name !== undefined ? modalInfo.name : '...loading'}> 
                  <Text>Phone Number: {"\n"} {modalInfo.formatted_phone_number !== undefined ? modalInfo.formatted_phone_number : '...loading'}{"\n"}</Text>
                  <Text>Address: {"\n"} {modalInfo.formatted_address !== undefined ? modalInfo.formatted_address : '...loading'}{"\n"}</Text>
                  <Text>Open Hours
                    {openHoursText}
                  </Text>
                  <View>
                    <TextField
                      label='Leave yourself some notes about the event'
                      value={text}
                      onChangeText={ (text) => this.setState({ text }) }
                    />
                  </View>
                  <View>
                    <Button 
                      onPress={this._showDateTimePicker}
                      title='pick a start time'
                    >
                    </Button> 
                    <View>
                      <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode='time'
                      />
                    </View>
                  </View>
                  <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                  />
                </Card>
              </View>
            </View>
          </Modal>
        </View>


        <View style={{ flex: 1 }}>
          <Text style={styles.text}>{data.name}</Text>
        </View>
        {/* <Image source={{uri: data.image}} style={styles.image} /> */}

      </Animated.View>
    );
  }
}

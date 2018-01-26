import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  Platform,
  View,
  Modal
} from 'react-native';
import PropTypes from 'prop-types';
import SortableList from 'react-native-sortable-list'; // 0.0.16
import axios from 'axios';
import { keys } from '../config';
import { Button, Icon, Text, Card } from 'react-native-elements';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';


const window = Dimensions.get('window');

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 90,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 25,

    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2,
      },

      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    }),
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    alignItems: 'center',
    padding: 10
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});


export default class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extraData: {},
      modalVisible: false,
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
          this.setState({ extraData: res });
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

  componentDidMount(){

  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }


  render() {
    const { data } = this.props;

    // const daysOpen = this.state.extraData.data.result.weekday_text.map(day => day);

    

    return (
      <Animated.View style={[
          styles.row,
          this._style,
        ]}
      >
        <Icon
          name='plus-circle'
          type='font-awesome'
          color='#f50'
          style={{ padding: 2 }}
          onPress={() => {
            // console.log(this.state.extraData.data.result);
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
                <Card title={this.state.extraData.data.result.name}> 
                  <Text>{this.state.extraData.data.result.formatted_address}</Text>
                  <Text>{this.state.extraData.data.result.formatted_phone_number}</Text>
                  <Text></Text>
                </Card>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
        </View>
          <View style={{ flex: 1}}>
            <Text style={styles.text}>{data.name}</Text>
          </View>
        {/* <Image source={{uri: data.image}} style={styles.image} /> */}
      </Animated.View>
    );
  }
}

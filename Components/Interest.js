import React from 'react';
import { Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';
import googleIcons from '../icons';
import { keys } from '../config';

export default class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.selectInterest = this.selectInterest.bind(this);
  }

  selectInterest() {
    AsyncStorage.getItem('Token').then((res) => {
      const savedToken = JSON.parse(res);
      console.log(savedToken);
      console.log(this.props);
      axios({
        method: 'post',
        url: 'http://18.218.102.64/user_like',
        headers: {
          authorization: savedToken,
          'Content-Type': 'application/json',
        },
        data: { id_type: this.props.type },
      })
        .then((response) => {
          console.log(`user like post response ${response}`);
        })
        .catch((err) => {
          console.error(`select interest post error ${err}`);
        });
    });
  }

  render() {
    return (
      <Button
        large
        raised
        buttonStyle={{ backgroundColor: '#0e416d', width: 500, marginVertical: 5 }}
        icon={{ name: 'book', type: 'font-awesome' }}
        onPress={this.selectInterest}
        title={this.props.name}
      />
    );
  }
}

Interest.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

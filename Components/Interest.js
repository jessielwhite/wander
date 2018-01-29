import React from 'react';
import { Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.selectInterest = this.selectInterest.bind(this);
  }

  selectInterest() {
    AsyncStorage.getItem('Token').then((res) => {
      const savedToken = JSON.parse(res);
      axios({
        method: 'post',
        url: keys.server + '/user_like',
        headers: {
          authorization: savedToken,
          'Content-Type': 'application/json',
        },
        data: { id_type: this.props.type.id },
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
        icon={{ name: 'envira', type: 'font-awesome' }}
        onPress={this.selectInterest}
        title={this.props.name}
      />
    );
  }
}

Interest.propTypes = {
  name: PropTypes.string,
  type: PropTypes.object,
};

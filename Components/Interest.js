import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.selectInterest = this.selectInterest.bind(this);
  }

  selectInterest() {
    axios.post('http://18.218.102.64/user_like', { userLike: this.props.type })
      .then((res) => {
        // console.log(res);
      })
      .catch(err => console.error(err));
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
  type: PropTypes.string,
};

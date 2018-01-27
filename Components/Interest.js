import React from 'react';
import { Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { keys } from '../config';

export default class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.selectInterest = this.selectInterest.bind(this);
  }

  selectInterest() {
    console.log(this.props.type);
    AsyncStorage.getItem('Token')
      .then(token => axios.post('http://18.218.102.64/user_like', { headers: { authorization: JSON.parse(token) }, data: { id_type: this.props.type.id } }))
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }

//   AsyncStorage.getItem('Token')
//       .then(token => axios.get('http://18.218.102.64/dashboard', { headers: { authorization: JSON.parse(token) } }))
//       .then((res) => {
//   console.log(res);
//   res.data.forEach((schedule) => {
//     if (schedule.status === 'invited') {
//       invited.push(schedule);
//     } else if (schedule.status === 'attending' || schedule.status === 'creator') {
//       attending.push(schedule);
//     }
//   });
// })
//       .catch (error => console.error(error));

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

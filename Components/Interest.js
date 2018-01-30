import React from 'react';
import { Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';

const icons = {
  'Amusement Parks': 'fort-awesome',
  Aquariums: 'user-circle-o',
  'Art Gallerys': 'image',
  'Bowling Alleys': 'eercast',
  'Book Stores': 'book',
  Casinos: 'money',
  'Clothing Stores': 'shopping-cart',
  'Point Of Interests': 'building',
  'Shopping Malls': 'shopping-bag',
  Librarys: 'book',
  'Movie Theaters': 'video-camera',
  Museums: 'building-o',
  'Night Clubs': 'music',
  Parks: 'users',
  Stadiums: 'soccer-ball-o',
  Zoos: 'flag',
};

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
        url: 'http://18.218.102.64/user_like',
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
        onPress={this.selectInterest}
        icon={{ name: icons[this.props.name], type: 'font-awesome' }}
        title={this.props.name}
      />
    );
  }
}

Interest.propTypes = {
  name: PropTypes.string,
  type: PropTypes.object,
};

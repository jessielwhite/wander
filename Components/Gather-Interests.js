import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Interest from './Interest';

const buttonMap = {
  99: 'amusement_park',
  106: 'aquarium',
  113: 'art_gallery',
  119: 'book_store',
  126: 'bowling_alley',
  133: 'casino',
  139: 'clothing_store',
  146: 'point_of_interest',
  153: 'shopping_mall',
  159: 'library',
  166: 'movie_theater',
  173: 'museum',
  179: 'night_club',
  186: 'park',
  193: 'stadium',
  199: 'zoo',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 60,
    fontWeight: 'bold',
  },
  button: {
    // alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
  },
});

export default class GatherInterests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      types: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  componentWillMount() {
    const self = this;
    axios.get('http://18.218.102.64/types')
      .then((response) => {
        console.log(response);
        self.setState({ types: response.data.map(type => type.name) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleNext() {
    this.props.navigation.navigate('Dashboard', { created: false });
  }

  render() {
    const interests = [];
    for (let i = 0; i < this.state.types.length; i += 1) {
      let name = this.state.types[i];
      name = `${name.replace(/_{1,}/g, ' ').replace(/(\s{1,}|\b)(\w)/g, (m, space, letter) => space + letter.toUpperCase())}s`;
      interests.push(<Interest
        name={name}
        type={this.state.types[i]}
        navigation={this.props.navigation}
        key={name}
      />);
      // ,{/* <Text>interests {i}</Text> */}
    }
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <Text style={styles.titleText}>wander</Text>
        <Text style={{ fontSize: 18 }}>Tell us what you like to do when you're on vacation</Text>
        {interests}
        <Button
          large
          raised
          buttonStyle={{ backgroundColor: 'green' }}
          title="Next"
          onPress={this.handleNext}
        />
      </ScrollView>
    );
  }
}

GatherInterests.propTypes = {
  navigation: PropTypes.object,
};

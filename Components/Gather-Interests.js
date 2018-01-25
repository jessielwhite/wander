import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Interest from './Interest';

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
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
  },
});

export default class GatherInterests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
    };
    this.handleNext = this.handleNext.bind(this);
  }

  componentWillMount() {
    // This binding is lost in the get request, so we need to store it
    const self = this;

    // Get all the types of places from the database
    axios.get('http://18.218.102.64/types')
      .then((response) => {
        self.setState({ types: response.data.map(type => type.name) });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleNext() {
    this.props.navigation.navigate('Dashboard', { created: false });
  }

  render() {
    const interests = this.state.types.map((type) => {
      const name = `${type.replace(/_{1,}/g, ' ').replace(/(\s{1,}|\b)(\w)/g, (m, space, letter) => space + letter.toUpperCase())}s`;
      return (<Interest
        name={name}
        type={type}
        navigation={this.props.navigation}
        key={name}
      />);
    });
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

GatherInterests.navigationOptions = () => ({
  header: null,
});

GatherInterests.propTypes = {
  navigation: PropTypes.object,
};

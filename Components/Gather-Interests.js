import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements'


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 20,
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
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  componentWillMount() {
    // In practice, we'll pull out all of the items and map over them,
    // creating the buttons that way. I've hard-coded them here while
    // we're waiting for database connection though
  }
  handleClick() {
    console.log('something was clicked');
  }
  handleNext() {
    // Send information to database
    this.props.navigation.navigate('Dashboard');
  }
  render() {
    const interests = [];
    for (let i = 0; i < 50; i += 1) {
      interests.push(
        <Button
          large
          // style={styles.button}
          icon={{name: 'envira', type: 'font-awesome'}}
          onPress={this.handleClick}
          key={i}
          title='interests'
        />
          // ,{/* <Text>interests {i}</Text> */}
        );
    }
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <Text style={styles.titleText}>wander</Text>
        <Text>Tell us what you like to do when you're on vacation</Text>
        {interests}
        <Button
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

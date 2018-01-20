import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';


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
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  componentWillMount() {
    axios.get('18.218.102.64/types')
      .then((res) => {
        console.log(res);
        // set the state according to the response
      })
      .catch(err => console.error(err));
    // In practice, we'll pull out all of the items and map over them,
    // creating the buttons that way. I've hard-coded them here while
    // we're waiting for database connection though
  }
  handleClick(item) {
    console.log('something was clicked');
    this.setState({ selected: this.state.selected.concat([item]) });
  }
  handleNext() {
    // Send information to database
    this.state.selected.forEach((interest) => {
      axios.post('18.218.102.64/user_like', { interest })
        .then((res) => {
          console.log(res);
          this.props.navigation.navigate('Dashboard');
        })
        .catch(err => console.error(err));
    });

  }
  render() {
    const interests = [];
    for (let i = 0; i < 50; i += 1) {
      interests.push(
        <Button
          large
          raised
          buttonStyle={{backgroundColor: '#0e416d', width: 500, marginVertical: 5 }}
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
        <Text style={{ fontSize: 18 }}>Tell us what you like to do when you're on vacation</Text>
        {interests}
        <Button
          large
          raised
          buttonStyle={{backgroundColor: 'green'}}
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

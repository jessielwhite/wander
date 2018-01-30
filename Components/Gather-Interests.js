import React from 'react';
import { Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Interest from './Interest';
import { styles } from './Styles';
import { typePlurals } from '../SampleData/Types';

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
    axios.get('http://18.218.102.64/types')
      .then((response) => {
        self.setState({ types: response.data.map(type => type) });
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
      return (<Interest
        name={typePlurals[type.name]}
        type={type}
        navigation={this.props.navigation}
        key={typePlurals[type.name]}
      />);
    });
    return (
      <ScrollView contentContainerStyle={styles.gatherInterestsContainer} >
        <Text style={styles.gatherInterestsTitleText}>wander</Text>
        <Text style={{ fontSize: 18 }}>Tell us what you like to do when you're on vacation</Text>
        {interests || <Text>loading</Text>}
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

import React from 'react';
import { Text, Button, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  titleText: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
    // console.log(interest);
    console.log('something was clicked');
  }
  handleNext() {
    // Send information to database
    this.props.navigation.navigate('Dashboard');
  }
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }} >
        <Text style={styles.titleText}>wander</Text>
        <Text>Tell us what you like to do when you're on vacation</Text>
        <Button
          title="Amusement parks"
          onPress={this.handleClick}
        />
        <Button
          title="Aquariums"
          onPress={this.handleClick}
        />
        <Button
          title="Art galleries"
          onPress={this.handleClick}
        />
        <Button
          title="Book stores"
          onPress={this.handleClick}
        />
        <Button
          title="Bowling"
          onPress={this.handleClick}
        />

        <Button
          title="Gambling"
          onPress={this.handleClick}
        />
        <Button
          title="Shopping"
          onPress={this.handleClick}
        />
        <Button
          title="Landmarks"
          onPress={this.handleClick}
        />
        <Button
          title="Libraries"
          onPress={this.handleClick}
        />
        <Button
          title="Movies"
          onPress={this.handleClick}
        />
        <Button
          title="Museums"
          onPress={this.handleClick}
        />
        <Button
          title="Night life"
          onPress={this.handleClick}
        />
        <Button
          title="City parks"
          onPress={this.handleClick}
        />
        <Button
          title="National parks"
          onPress={this.handleClick}
        />
        <Button
          title="Stadiums"
          onPress={this.handleClick}
        />
        <Button
          title="Sporting events"
          onPress={this.handleClick}
        />
        <Button
          title="Zoos"
          onPress={this.handleClick}
        />
        <Button
          title="Live music"
          onPress={this.handleClick}
        />
        <Button
          title="Local music"
          onPress={this.handleClick}
        />
        <Button
          title="Festivals"
          onPress={this.handleClick}
        />
        <Button
          title="Underground music"
          onPress={this.handleClick}
        />
        <Button
          title="Dancing"
          onPress={this.handleClick}
        />
        <Button
          title="Animals"
          onPress={this.handleClick}
        />
        <Button
          title="Art"
          onPress={this.handleClick}
        />
        <Button
          title="Books"
          onPress={this.handleClick}
        />
        <Button
          title="Family-friendly events"
          onPress={this.handleClick}
        />
        <Button
          title="History"
          onPress={this.handleClick}
        />
        <Button
          title="Comedy"
          onPress={this.handleClick}
        />
        <Button
          title="Regional cuisine"
          onPress={this.handleClick}
        />
        <Button
          title="Fine dining"
          onPress={this.handleClick}
        />
        <Button
          title="Street food"
          onPress={this.handleClick}
        />
        <Button
          title="Cheap eats"
          onPress={this.handleClick}
        />
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

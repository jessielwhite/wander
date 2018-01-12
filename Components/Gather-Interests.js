import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class GatherInterests extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
        <Text>Gather-Interests</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

GatherInterests.propTypes = {
  navigation: PropTypes.object,
};

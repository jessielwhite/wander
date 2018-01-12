import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class Dashboard extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to Gather Interests"
          onPress={() => this.props.navigation.navigate('GatherInterests')}
        />
        <Button
          title="Go to Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <Button
          title="Go to New Itinerary"
          onPress={() => this.props.navigation.navigate('NewItinerary')}
        />
        <Button
          title="Go to Itinerary"
          onPress={() => this.props.navigation.navigate('Itinerary')}
        />
      </View>
    );
  }
};

// const App = StackNavigator({
//   Login: { screen: Login },
//   Signup: { screen: Signup },
//   GatherInterests: { screen: GatherInterests },
//   Dashboard: { screen: Dashboard },
//   NewItinerary: { screen: NewItinerary },
//   Itinerary: { screen: Itinerary },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

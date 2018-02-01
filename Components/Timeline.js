import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Icon,
} from 'react-native';
import { Header } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Timeline from 'react-native-timeline-listview'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
        paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});

export default class TimelineExample extends Component {
  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688',lineColor:'#009688'},
      {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.'},
      {time: '12:00', title: 'Lunch'},
      {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688'},
      {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688'}
    ]
  } 

  render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
        {/* <Header 
          style={{ height: 35 }}
          statusBarProps={{ barStyle: 'light-content' }}
          outerContainerStyles={{ backgroundColor: '#0e416d' }}
          centerComponent={{ text: 'wander', style: { color: '#fff', fontSize: 28, height: 30 } }}
          leftComponent={<Icon
            name="home"
            color="#fff"
            onPress={() => this.props.navigation
              .dispatch(NavigationActions.reset({
                index: 0,
                actions:
                  [NavigationActions.navigate({ routeName: 'Dashboard' })],
              }))}
          />}
         /> */}
        <View>
            <Timeline 
            style={styles.list}
            data={this.data}
            circleSize={20}
            circleColor='rgb(45,156,219)'
            lineColor='rgb(45,156,219)'
            timeContainerStyle={{minWidth:52, marginTop: -5}}
            timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
            descriptionStyle={{color:'gray'}}
            options={{
                style:{paddingTop:5}
            }}
            innerCircle={'dot'}
            /> 
        </View>
      </View>
    );
  }
}


TimelineExample.navigationOptions = () => ({
    header: null,
});
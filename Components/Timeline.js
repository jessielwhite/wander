import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Icon,
} from 'react-native';
import Button from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Timeline from 'react-native-timeline-listview';
import Swiper from 'react-native-swiper';
import { styles } from './Styles';


const stylesTimeline = StyleSheet.create({
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
  constructor(props){
    super(props)

    this.data = {
    day_1 :[
      {time: '09:00 am', title: 'Fitroy Place', description: 'rating: 5', circleColor: '#009688',lineColor:'#009688'},
      {time: '10:45 am', title: 'Hangar 61', description: 'rating: 5'},
      {time: '12:00 pm', title: 'Devner Cafe and Casion', description: 'rating: 4.8'},
      {time: '2:00 pm', title: 'Ace Express Coaches Casino Bus', description: 'raiting 4.7',lineColor:'#009688'},
      {time: '3:30 pm', title: 'Baker Historic District', description: 'rating: 5', circleColor: '#009688'}
    ],
    day_2 :[
        {time: '10:10 am', title: 'Fitroy Place', description: 'rating: 4.3', circleColor: '#009688',lineColor:'#009688'},
        {time: '10:45 am', title: 'Hangar 61', description: 'rating: 5'},
        {time: '12:00 pm', title: 'Devner Cafe and Casion', description:'rating: 4.7'},
        {time: '3:00 pm', title: 'Ace Express Coaches Casino Bus', description: 'rating: 5',lineColor:'#009688'},
        {time: '7:30 pm', title: 'Baker Historic District', description: 'rating 4.9', circleColor: '#009688'}
      ],
      day_3 :[
        {time: '10:10 am', title: 'Fitroy Place', description: 'rating: 4.5', circleColor: '#009688',lineColor:'#009688'},
        {time: '10:45 am', title: 'Hangar 61', description: 'rating: 4.8'},
        {time: '12:00 pm', title: 'Devner Cafe and Casion', description:'rating: 5'},
        {time: '3:00 pm', title: 'Ace Express Coaches Casino Bus', description: 'rating: 4.6',lineColor:'#009688'},
        {time: '7:30 pm', title: 'Baker Historic District', description: 'rating 5', circleColor: '#009688'}
      ],
    }
  } 

  componentWillMount() {
      
  }
  
  
  
  render() {

      // 'rgb(45,156,219)'

      const scheduleView = Object.keys(this.data)
        .filter(item => item[0] === 'd')
        .map(day => 
            <View style={stylesTimeline.container}>
                <Timeline
                style={stylesTimeline.list}
                data={this.data[day]}
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
        )

    return (
        <Swiper>
            {scheduleView || <Text>Your Timeline is loading...</Text>}
        </Swiper>
            
    );
  }
}


TimelineExample.navigationOptions = () => ({
    header: null,
});
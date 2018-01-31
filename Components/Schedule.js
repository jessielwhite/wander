import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import SortableList from 'react-native-sortable-list'; // 0.0.16
import Row from './Row';
import { exampleSchedule } from '../scheduleExample';

const window = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',

    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },
  list: {
    flex: 1,
  },
  contentContainer: {
    width: window.width,

    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },

      android: {
        paddingHorizontal: 0,
      },
    }),
  },
});

export default class Schedule extends Component {

  _renderRow({ data, active }) {

    return <Row 
      data={data} 
      active={active} 

    />
  }

  render() {

    

    return (
      <View style={styles.container}>
        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={this.props.data.events}
          renderRow={this._renderRow}

          key="hi this is a key"
        />
      </View>
    );
  }
}

Schedule.propTypes = {
  navigation: PropTypes.object,
};

import React, { Component } from 'react';
import { View } from 'react-native';
import SortableList from 'react-native-sortable-list';
import PropTypes from 'prop-types';
import Row from './Row';
import { styles } from './Styles';

export default class Schedule extends Component {

  renderRow({ data, active }) {
    return <Row 
      data={data} 
      active={active} 

    />
  }

  render() {

    

    return (
      <View style={styles.scheduleContainer}>
        <SortableList
          style={styles.scheduleList}
          contentContainerStyle={styles.scheduleContentContainer}
          data={this.props.data.events}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

Schedule.propTypes = {
<<<<<<< HEAD
  data: PropTypes.object,
=======
  navigation: PropTypes.object,
<<<<<<< HEAD
};
=======
>>>>>>> 14f56f6bc4889784f9ff4de1f104f7d5eb5e89df
};
>>>>>>> 0881239cadd66f28efe8365d87ffc52d1e4fd58a

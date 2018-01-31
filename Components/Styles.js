import { StyleSheet, Platform, Animated, Dimensions } from 'react-native';

const window = Dimensions.get('window');

module.exports.styles = StyleSheet.create({
  // Row.js
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 90,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 25,

    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2,
      },

      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    }),
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    alignItems: 'center',
    padding: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(127, 127, 127, 0.75)',
  },
  innerContainer: {
    alignItems: 'center',
  },
  // Styles for Trip.js
  tripContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  tripModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(127, 127, 127, 0.75)',
  },
  tripModalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tripModalButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeButton: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

this.active = new Animated.Value(0);

module.exports.rowStyle = {
  ...Platform.select({
    ios: {
      transform: [{
        scale: this.active.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.1],
        }),
      }],
      shadowRadius: this.active.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 10],
      }),
    },

    android: {
      transform: [{
        scale: this.active.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.07],
        }),
      }],
      elevation: this.active.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 6],
      }),
    },
  }),
};

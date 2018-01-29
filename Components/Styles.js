import { StyleSheet, Platform } from 'react-native';

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
});

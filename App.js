import React from 'react';
import { StackNavigator } from 'react-navigation';
import Dashboard from './Dashboard';
import Login from './Login';

const App = StackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
});

export default App;

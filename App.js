import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import ConstellationsScreen from './ConstellationsScreen';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null
    })
  },

  Constellations: {
    screen: ConstellationsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
});

export default RootNavigator;

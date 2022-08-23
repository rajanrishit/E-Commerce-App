import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Oppo from './screens/Oppo';
import Handbag from './screens/Handbag';
import Headphone from './screens/Headphone';
import Laptop from './screens/Laptop';
import Ps5 from './screens/Ps5';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen,
  Oppo: Oppo,
  Ps5: Ps5,
  Laptop: Laptop,
  Headphone: Headphone,
  Handbag: Handbag,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 3,
  },
});

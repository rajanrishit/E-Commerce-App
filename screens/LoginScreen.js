import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import HomeScreen from './HomeScreen';
import db from '../config';

export default class LoginScreen extends Component {
   goToHomeScreen = () => {
  //  this.incrementCounter();
   // const custId = this.state.counter;
   // db.firestore().collection('CustomerData')   
   // .set({ name: this.state.name,age: this.state.age });
    this.props.navigation.navigate('HomeScreen');
  };

  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
            placeholder="Please enter your Name"
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ age: text });
            }}
            placeholder="Please enter your Age"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.goToHomeScreen();
              Alert.alert('Hi');
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  inputBox: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'CENTER',
    textAlign: 'CENTER',
    borderWidth: 4,
    height: 40,
    outline: 'none',
  },
  buttonText: {
    textAlign: 'CENTER',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'centre',
    color: 'white',
  },
  submitButton: {
    width: '40%',
    height: 55,
    alignSelf: 'CENTER',
    margin: 40,
    padding: 10,
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
  },
  logoImage: {
    width: '50%',
    height: 130,
    marginTop: 10,
    marginLeft: 80,
    borderRadius: 3,
    borderWidth: 3,
  },
});

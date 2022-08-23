import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Headphone extends Component {
   goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <View style={styles.container}>
       <AppHeader />
      <Image source={require('../assets/Headphone.jpg')}
           style={styles.headphoneImage}
            />
        <Text style={styles.hpText}>Apple Headphone</Text>
            <View style={styles.headPhoneText}>
          <ul >
           <li>Charging Time : 3 Hours</li>
           <li>Playback Time : 15 Hours</li>
           <li>Drivers : 40mm Dynamic Drivers </li>
           <li>Warranty : 1 Year</li>
           <li>Cushioned : Yes</li>
          </ul> 
          </View>
          <TouchableOpacity
            onPress={() =>{
              this.goToHomeScreen();
            }}>
             <Text style={styles.previous}>Previous</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#',
  },
  headphoneImage: {
    justifyContent:"CENTER",
    width: '30%',
    height: 110,
    marginTop: 60,
    marginLeft: 100,
    borderRadius: 3,
    borderWidth: 3,
    marginRight: 40,
  },
   hpText: {
    marginLeft: 100,
    fontWeight: 'bold',
    color: 'red',
  },
  headPhoneText: {
    fontWeight:'bold',
    margin:30,
    borderRadius: 4,
    borderWidth: 3,
  },
  previous: {
    textAlign:"CENTER",
    fontWeight:'bold',
     borderRadius: 2,
    borderWidth: 1,
    width:"30%",
    justifyContent:"CENTER",
    alignSelf:"CENTER"
  }
});

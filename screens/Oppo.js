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

export default class Oppo extends Component {
   goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <View style={styles.container}>
       <AppHeader />
      <Image source={require('../assets/Mobile.png')}
           style={styles.mobileImage}
            />
        <Text style={styles.mobileText}>Oppo Reno9</Text>
            <View style={styles.renoText}>
          <ul >
           <li>Display: 6.43-inch (2400x1080)</li>
           <li>Processor: MediaTek Dimensity 1300</li>
           <li>Front Camera: 32MP</li>
           <li>Rear Camera: 50MP + 2MP + 2MP</li>
           <li>RAM: 8GB</li>
           <li>Storage: 128GB</li>
           <li>Battery Capacity: 4500mAh</li>
           <li>OS: Android 12</li>
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
  mobileImage: {
    justifyContent:"CENTER",
    width: '30%',
    height: 110,
    marginTop: 60,
    marginLeft: 100,
    borderRadius: 3,
    borderWidth: 3,
    marginRight: 40,
  },
   mobileText: {
    marginLeft: 110,
    fontWeight: 'bold',
    color: 'red',
  },
  renoText: {
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

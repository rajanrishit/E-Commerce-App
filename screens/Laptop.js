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
      <Image source={require('../assets/Laptop.jpg')}
           style={styles.laptopImage}
            />
        <Text style={styles.laptopText}>Hp Laptop</Text>
            <View style={styles.hpText}>
          <ul >
           <li>AMD Ryzen™ 3 5300U Processor (up to 3.8 GHz max boost clock(2i), 4 MB L3 cache, 4 cores, 8 threads</li>
           <li>Windows 11 Home</li>
           <li>39.6 cm (15.6) diagonal, FHD (1920 x 1080), micro-edge, anti-glare, 250 nits, 45% NTSC </li>
           <li>AMD Radeon™ Graphics</li>
           <li>8 GB DDR4-3200 MHz RAM (1 x 8 GB)</li>
           <li>512 GB PCIe® NVMe™ M.2 SSD</li>
           <li>1.69 kg</li>
           <li>₹41,999 (incl. of all taxes)Includes GST ₹6,407</li>
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
  laptopImage: {
    justifyContent:"CENTER",
    width: '50%',
    height: 110,
    marginTop: 60,
    marginLeft: 100,
    borderRadius: 3,
    borderWidth: 3,
    marginRight: 40,
  },
   laptopText: {
    marginLeft: 140,
    fontWeight: 'bold',
    color: 'red',
  },
  hpText: {
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

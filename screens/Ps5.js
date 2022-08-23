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
      <Image source={require('../assets/ps5.jpg')}
           style={styles.psImage}
            />
        <Text style={styles.psText}>Play Station 5</Text>
            <View style={styles.stationText}>
          <ul >
           <li>CPU:Custom 8-core AMD Zen 2 Variable frequency up to 3.5 GHz</li>
           <li>Memory:16 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (for background tasks)</li>
           <li>Storage:Custom 825 GB PCIe 4.0 NVMe SSD</li>
           <li>₹60,599 (incl. of all taxes)</li>
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
  psImage: {
    justifyContent:"CENTER",
    width: '50%',
    height: 110,
    marginTop: 60,
    marginLeft: 100,
    borderRadius: 3,
    borderWidth: 3,
    marginRight: 40,
  },
   psText: {
    marginLeft: 140,
    fontWeight: 'bold',
    color: 'red',
  },
  stationText: {
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

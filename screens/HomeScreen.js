import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  goToOppo = () => {
    this.props.navigation.navigate('Oppo');
  }

  goToHandbag = () =>{
    this.props.navigation.navigate('Handbag');
  }
  goToHeadphone = () =>{
    this.props.navigation.navigate('Headphone');
  }
   goToHp = () =>{
    this.props.navigation.navigate('Laptop');
  }
   goToPs5 = () =>{
    this.props.navigation.navigate('Ps5');
  }
   goToIpad = () =>{
    this.props.navigation.navigate('Ipad');
  }

  render() {
    return (
      <View>
        <ScrollView>
          <AppHeader />
          <View style={styles.container}>
            <Image
              source={require('../assets/Mobile.png')}
              style={styles.mobileImage}
            />
            <TouchableOpacity 
              onPress={() =>{
                    this.goToOppo();
                }}>
              <Text style={styles.moblieText}>Oppo Reno9</Text>
              </TouchableOpacity>

            <Image
              source={require('../assets/Handbag.jpg')}
              style={styles.handbagImage}
            />
            <TouchableOpacity
              onPress={() =>{
                  this.goToHandbag();
              }}>
            <Text style={styles.handbagText}>Michel Kors Handbag</Text>
            </TouchableOpacity>

            <Image
              source={require('../assets/Headphone.jpg')}
              style={styles.headphoneImage}
            />
             <TouchableOpacity
              onPress={() =>{
                  this.goToHeadphone();
              }}>
            <Text style={styles.headphoneText}> Headphone </Text>
            </TouchableOpacity>

            <Image
              source={require('../assets/Laptop.jpg')}
              style={styles.laptopImage}
            />
             <TouchableOpacity
              onPress={() =>{
                  this.goToHp();
              }}>
              <Text style={styles.laptopText}>Hp Laptop</Text>
            </TouchableOpacity>

            <Image source={require('../assets/ps5.jpg')} style={styles.ps5Image} />
             <TouchableOpacity
              onPress={() =>{
                  this.goToPs5();
              }}>
            <Text style={styles.ps5Text}>Play Station 5</Text>
            </TouchableOpacity>
  

          </View>
        </ScrollView>
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
    width: '30%',
    height: 110,
    marginTop: 60,
    marginLeft: 50,
    borderRadius: 3,
    borderWidth: 3,
    marginRight: 40,
  },
  moblieText: {
    marginLeft: 60,
    fontWeight: 'bold',
    color: 'red',
  },

  headphoneImage: {
    width: '30%',
    height: 110,
    marginLeft: 50,
    marginTop: 30,
    padding: 20,
    borderRadius: 3,
    borderWidth: 3,
  },
  headphoneText: {
    marginLeft: 60,
    fontWeight: 'bold',
    color: 'blue',
  },

  handbagImage: {
    width: '30%',
    height: 110,
    marginTop: 40,
    marginLeft: 170,
    padding: 20,
    borderRadius: 3,
    borderWidth: 3,
  },
  handbagText: {
    marginLeft: 150,
    fontWeight: 'bold',
    color: 'yellow',
  },

  laptopImage: {
    width: '40%',
    height: 110,
    marginTop: 60,
    marginLeft: 160,
    padding: 10,
    borderRadius: 3,
    borderWidth: 3,
  },
  laptopText: {
    marginLeft: 190,
    fontWeight: 'bold',
    color: 'green',
  },
  ps5Image: {
    width: '30%',
    height: 120,
    marginTop: 60,
    marginLeft: 50,
    borderRadius: 3,
    borderWidth: 3,
  },
  ps5Text: {
    marginLeft: 50,
    fontWeight: 'bold',
    color: 'purple',
  },
  ipadImage: {
    width: '30%',
    height: 120,
    marginTop: 60,
    marginLeft: 160,
    borderRadius: 3,
    borderWidth: 3,
  },
  ipadText: {
    marginLeft: 180,
    fontWeight: 'bold',
    color: 'pink',
  },
});

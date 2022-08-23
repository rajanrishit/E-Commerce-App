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

export default class Handbag extends Component {
    goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <Image
          source={require('../assets/Handbag.jpg')}
          style={styles.handbagImage}
        />
        <Text style={styles.handbagText}>Michel Kors Handbag</Text>
        <View style={styles.bagText}>
          <ul>
            <li>Wipe with clean, dry cloth</li>
            <li>Saffiano leather</li>
            <li>Silver-tone hardware</li>
            <li>Back zip pocket</li>
            <li>Front slip pocket</li>
            <li>2 side slip pockets</li>
            <li>100% cow leather</li>
            <li>Package contains: 1 bag, 1 strap</li>
            <li>One main compartment</li>
            <li>Dimensions : 32 cm x 19 cm x 11 cm</li>
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
  handbagImage: {
    width: '30%',
    height: 110,
    marginTop: 40,
    marginLeft: 110,
    padding: 20,
    borderRadius: 3,
    borderWidth: 3,
  },
  handbagText: {
    marginLeft: 90,
    fontWeight: 'bold',
    color: 'blue',
  },
  bagText: {
    fontWeight: 'bold',
    margin: 30,
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

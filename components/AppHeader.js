import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Shopping App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'yellow',
  },
  text:{
    color: 'black',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
     marginLeft: 10,
  },
  logoImage: {
    width: '20%',
    height: 60,
    marginTop: 0,
    marginLeft: 10,
    borderRadius: 3,
    borderWidth: 3,
  }
});

export default AppHeader;
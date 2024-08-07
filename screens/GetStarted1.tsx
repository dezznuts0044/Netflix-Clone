import {
  Alert,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const GetStarted1 = () => {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={styles.Container}>
        <Image
          source={require('../assets/img/getStarted1.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/img/getStarted2.png')}
          style={styles.overlay}
        />
      </View>
      <Text style={styles.btext1}>
        Unlimited entertainment,{'\n'} one low price.
      </Text>
      <Text style={styles.btext}>All of Netflix, starting at just ₹149.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Button pressed')}>
        <Text style={styles.btext}>GET STARTED</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GetStarted1;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
    resizeMode: 'cover',
  },
  overlay: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    height: Dimensions.get('window').height * 0.8,
    top: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#C60A0A',
    height: 56,
    width: Dimensions.get('window').width,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btext: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  btext1: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

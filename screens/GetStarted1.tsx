import React from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const GetStarted1 = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('GetStarted2');
  };

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={styles.container}>
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
      <Text style={styles.btext2}>All of Netflix, starting at just ₹149.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  buttonText: {
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
    marginTop: -10,
  },
  btext2: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default GetStarted1;

import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const HomeScreen = () => {
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D',
    headers: {
      'x-rapidapi-key': '0d2278ebbdmsh50e6af77e3e1e41p14d132jsnc83402e2307f',
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    },
  };
  const handleOnPress = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.scroll}>
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
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require('../assets/img/mainLogo.png')}
            style={styles.image}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleOnPress()}>
          <Text style={styles.btext}>Play</Text>
        </TouchableOpacity>
        <Text style={styles.btext}>Popular on Netflix</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  overlay: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    height: Dimensions.get('window').height * 0.8,
    top: 0,
    position: 'absolute',
  },
  icon: {
    resizeMode: 'contain',
    width: 36,
    height: 36,
    alignContent: 'flex-start',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
  },
  scroll: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputE: {
    height: 70,
    width: Dimensions.get('window').width * 0.7,
    marginTop: 180,
    borderWidth: 1,
    borderColor: 'black',
    padding: 17,
    opacity: 66,
    borderRadius: 10,
    backgroundColor: '#656060', // Light background for the input
  },
  inputP: {
    height: 70,
    width: Dimensions.get('window').width * 0.7,
    margin: 14,
    borderWidth: 1,
    padding: 17,
    borderRadius: 10,
    opacity: 0.6,
    backgroundColor: '#BBB8B8', // Light background for the input
  },
  button: {
    backgroundColor: 'grey',
    marginTop: 14,
    height: 56,
    width: 100,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btext: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  text1: {
    color: 'black', // Set text color to black for better contrast
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 17,
  },
  text2: {
    color: 'black', // Set text color to black for better contrast
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    paddingTop: 134,
  },
  image: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: 'medium',
    marginTop: 10,
  },
});

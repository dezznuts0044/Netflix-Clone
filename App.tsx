import React, {useState, useEffect} from 'react';
import Login from './screens/Login';
import SplashScreen from './screens/SplashScreen';
import GetStarted1 from './screens/GetStarted1';
import GetStarted2 from './screens/GetStarted2';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  return <SearchScreen />;
};

const styles = StyleSheet.create({
  Heading: {
    fontFamily: 'Cochin',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  TextBox: {
    height: 40,
    borderWidth: 2,
    borderColor: '#29660C',
    margin: 10,
    padding: 3,
    backgroundColor: '#578E87',
  },
});

export default App;

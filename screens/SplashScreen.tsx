import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.Container}>
      <Image source={require('../assets/img/mainLogo.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

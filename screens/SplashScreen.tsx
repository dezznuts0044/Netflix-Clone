import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('GetStarted1');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.Container}>
      <Image
        source={require('../assets/img/mainLogo.png')}
        style={styles.logo}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex:1,
  },
  logo: {
    marginBottom:100,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;

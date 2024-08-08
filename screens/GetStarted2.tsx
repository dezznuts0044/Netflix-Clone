import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const GetStarted2 = () => {
  const [email, setEmail] = useState('');
  const [verify, setVerify] = useState(false);
  const navigation = useNavigation(); // Get navigation object

  const handleEmail = text => {
    setEmail(text);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      setVerify(true);
    } else {
      setVerify(false);
    }
  };

  const handleGetStartedPress = () => {
    if (verify) {
      navigation.navigate('Login');
    } else {
      Alert.alert('Invalid email address');
    }
  };

  const handleCrossPress = () => {
    navigation.navigate('GetStarted1');
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={handleCrossPress}>
        <Image
          source={require('../assets/icons/close_24dp.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.text2}>Ready to watch?</Text>
      <Text style={styles.text1}>
        Enter your email to create or sign in {'\n'}to your account.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmail}
        value={email}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleGetStartedPress}
      >
        <Text style={styles.btext}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 70,
    width: Dimensions.get('window').width * 0.7,
    margin: 25,
    borderWidth: 1,
    borderColor: '#221FB4', // Fixed typo: borderBlockColor -> borderColor
    padding: 17,
    borderRadius: 10,
  },
  icon: {
    marginLeft: Dimensions.get('window').width * 0.8,
    marginTop:20,
    width: 36,
    height: 36,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#C60A0A',
    height: 56,
    width: Dimensions.get('window').width * 0.7,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btext: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  text1: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: 'regular',
    textAlign: 'center',
    paddingTop: 17,
  },
  text2: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'medium',
    paddingTop: 134,
  },
});

export default GetStarted2;

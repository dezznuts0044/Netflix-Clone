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
import React, {useState} from 'react';

const GetStarted1 = () => {
  const [email, setEmail] = useState('');
  const [verify, setVerify] = useState(false);

  const handleEmail = text => {
    setEmail(text);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      setVerify(true);
    } else {
      setVerify(false);
    }
  };
  return (
    <>
      <View style={styles.Container}>
        <Image
          source={require('../assets/icons/close_24dp.png')}
          style={styles.icon}
        />
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
          onPress={() => Alert.alert('Button pressed')}>
          <Text style={styles.btext}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GetStarted1;

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
    borderBlockColor: '#221FB4',
    padding: 17,
    borderRadius: 10,
  },
  icon: {
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

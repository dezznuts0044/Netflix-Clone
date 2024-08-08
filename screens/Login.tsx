import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
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
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../assets/icons/arrow_back_24dp.png')}
          style={styles.icon}
        />
        <Image
          source={require('../assets/img/mainLogo.png')}
          style={styles.image}
        />
      </View>
      <TextInput
        style={styles.inputE}
        placeholder="Email"
        onChangeText={handleEmail}
        value={email}
      />
      {!verify && email.length > 0 && (
        <Text style={styles.errorText}>Enter a valid Email</Text>
      )}
      <TextInput
        style={styles.inputP}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Button pressed')}
        disabled={!verify}>
        <Text style={styles.btext}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
    backgroundColor: '#C60A0A',
    marginTop: 14,
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

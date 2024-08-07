import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={styles.Container}>
        <Image source={require('../assets/img/acc.png')} style={styles.image} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Button pressed')}>
        <Text style={styles.btext}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  image: {
    marginTop: 150,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 150,
    backgroundColor: '#C60A0A',
    height: 56,
    width: Dimensions.get('window').width,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btext: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
});

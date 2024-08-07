import React from 'react';
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
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleLogOut = () => {
    navigation.navigate('GetStarted1');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/img/acc.png')} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <TextInput
          style={styles.input}
          value="Test Name"
          editable={false} 
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value="testemail@example.com"
          editable={false}
          placeholderTextColor="#888"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text style={styles.btext}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 100,
    marginTop: 100,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#C60A0A',
    height: 56,
    width: Dimensions.get('window').width - 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btext: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
});

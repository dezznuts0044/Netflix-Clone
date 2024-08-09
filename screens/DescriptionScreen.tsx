import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';

const DescriptionScreen = ({ route }) => {
  const {title, image, des} = route.params || {};

  const [modalVisible, setModalVisible] = useState(false);

  const playTrailer = () => {
    if (!null) {
      setModalVisible(true);
    } else {
      Alert.alert('No trailer available');
    }
  };

  console.log('Description:', des); 

  return (
    <ScrollView contentContainerStyle={styles.Container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={{ uri: image }}
          style={styles.backgroundImage}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={playTrailer}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.btext1}>{title}</Text>
      <Text style={styles.description}>
        {des || 'No description available.'}
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Video
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
            style={styles.video}
            controls={true}
            resizeMode="contain"
          />
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default DescriptionScreen;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  backgroundContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 56,
    width: 100,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  btext1: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
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

const GetStarted1 = () => {
  const [movies, setMovies] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    const url = 'https://freetestapi.com/api/v1/movies';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const playTrailer = () => {
    if (selectedMovie && selectedMovie.trailer) {
      setModalVisible(true);
    } else {
      Alert.alert('No trailer available');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.Container}>
      <View style={styles.backgroundContainer}>
        {backgroundImage && (
          <Image
            source={{uri: backgroundImage}}
            style={styles.backgroundImage}
          />
        )}
        <Image
          source={require('../assets/img/getStarted1.png')}
          style={styles.overlayImage}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={playTrailer}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.btext1}>Popular on Netflix</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              setBackgroundImage(item.poster);
              setSelectedMovie(item);
            }}>
            <Image source={{uri: item.poster}} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardRating}>Rating: {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Video
            source={{uri: selectedMovie?.trailer}}
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

export default GetStarted1;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
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
  overlayImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  button: {
    backgroundColor: 'white',
    marginTop: -60,
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
  flatListContent: {
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 10,
    overflow: 'hidden',
    width: Dimensions.get('window').width * 0.6,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardRating: {
    color: 'grey',
    fontSize: 14,
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

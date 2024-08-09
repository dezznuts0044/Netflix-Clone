import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const url = `https://moviedatabase8.p.rapidapi.com/Search/${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '0d2278ebbdmsh50e6af77e3e1e41p14d132jsnc83402e2307f',
        'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setResults(result.slice(0, 2)); // Limit results to 2
    } catch (error) {
      console.error('Error fetching search results:', error);
      Alert.alert('Error', 'Failed to fetch search results');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movies, TV shows..."
        placeholderTextColor="gray"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.resultItem}>
            <Image
              source={{
                uri: item.backdrop_path || 'https://via.placeholder.com/150',
              }}
              style={styles.resultImage}
            />
            <Text style={styles.resultText}>{item.title || 'No Title'}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
  },
  input: {
    backgroundColor: '#333333',
    color: 'white',
    width: Dimensions.get('window').width * 0.9,
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 40,
  },
  searchButton: {
    backgroundColor: '#C60A0A',
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.9,
  },
  resultImage: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 10,
  },
  resultText: {
    color: 'white',
    fontSize: 18,
  },
});

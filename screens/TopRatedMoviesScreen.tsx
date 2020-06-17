import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Api} from '../services/Api';
import {Movie} from '../model/model';
import MovieListItem from '../components/MovieListItem';
import {SearchBar} from 'react-native-elements';

export default function TopRatedMoviesScreen() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  let flatListRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const searchRequest = (text: string) => {
    setLoading(true);
    Api.searchAllMovies(text)
      .then((results) => {
        setMovies(
          results.results.map((movie: Movie) => {
            return {
              key: `${movie.id}`,
              ...movie,
            };
          }),
        );
        setLoading(false);
        // @ts-ignore
        flatListRef.current.scrollToOffset({animated: false, offset: 0});
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.length !== 0) {
        searchRequest(search);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  const getAll = () => {
    setLoading(true);
    Api.getTopRatedMovies()
      .then((responseBody) => {
        setMovies(
          responseBody.results.map((movie: Movie) => {
            return {
              key: `${movie.id}`,
              ...movie,
            };
          }),
        );
        setLoading(false);
        // @ts-ignore
        flatListRef.current.scrollToOffset({animated: false, offset: 0});
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <View style={styles.container}>
      <SearchBar
        platform={'android'}
        lightTheme
        searchIcon={{
          type: 'material-community',
          color: '#86939e',
          name: 'share',
        }}
        clearIcon={{
          type: 'material-community',
          color: '#86939e',
          name: 'share',
        }}
        placeholder="Search Here..."
        onChangeText={(text) => {
          setSearch(text);
          if (text.length < 1) {
            getAll();
          }
        }}
        onCancel={getAll}
        showLoading={loading}
        value={search}
      />
      <FlatList
        ref={flatListRef}
        data={movies}
        renderItem={({item}) => <MovieListItem {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

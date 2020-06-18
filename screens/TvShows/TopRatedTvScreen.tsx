import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Api} from '../../services/Api';
import {TvShow} from '../../model/model';
import {SearchBar} from 'react-native-elements';
import TvShowListItem from '../../components/TvShowListItem';
export default function TopRatedTvScreen() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState('');
  let flatListRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const searchRequest = (text: string) => {
    setLoading(true);
    Api.searchAllTvShows(text)
      .then((results) => {
        setShows(
          results.results.map((tvShow: TvShow) => {
            return {
              key: `${tvShow.id}`,
              ...tvShow,
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
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);
  const getAll = () => {
    setLoading(true);

    Api.getTopRatedTvShows()
      .then((responseBody) => {
        setShows(
          responseBody.results.map((tvShows: TvShow) => {
            return {
              key: `${tvShows.id}`,
              ...tvShows,
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
        searchIcon={{
          type: 'material-community',
          color: '#86939e',
          name: 'magnify',
        }}
        clearIcon={{
          type: 'material-community',
          color: '#86939e',
          name: 'close-circle',
        }}
        platform={'android'}
        lightTheme
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
        data={shows}
        renderItem={({item}) => <TvShowListItem tvShow={item} />}
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

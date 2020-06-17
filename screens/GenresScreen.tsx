import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Api} from '../services/Api';
import {Genre} from '../model/model';
import {ListItem} from 'react-native-elements';

export default function GenresScreen() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    Api.getAllGenres()
      .then((responseBody) => {
        setGenres(
          responseBody.genres.map((genre: Genre) => {
            return {
              key: `${genre.id}`,
              name: genre.name,
            };
          }),
        );
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {genres.map((l: {key: string; name: string}, i) => (
          <ListItem key={i} title={l.name} bottomDivider />
        ))}
      </ScrollView>
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

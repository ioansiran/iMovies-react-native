import React from 'react';
import {Badge, Button, Card, Divider, Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Movie} from '../model/model';
import {trimByWord} from '../helpers/text';

function MovieListItem({movie}: {movie: Movie}) {
  const navigation = useNavigation();
  const readMore = () => {
    navigation.navigate('Movie detail', {
      movie: movie,
    });
  };
  return (
    <Card
      title={movie.title}
      image={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
      featuredSubtitle={movie.original_title}>
      {movie.adult ? <Badge status={'error'} value={'PG'} /> : <View />}

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text> Released {movie.release_date} </Text>
        <Text>{movie.popularity} viewers </Text>
      </View>
      <Divider style={styles.divider} />
      <Text style={{marginBottom: 10}}>{trimByWord(movie.overview)}</Text>

      <Button type={'clear'} title={'Read more'} onPress={readMore} />
    </Card>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export default MovieListItem;

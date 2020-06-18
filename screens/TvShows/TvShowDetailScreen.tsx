import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Genre, TvShow} from '../../model/model';
import {Button, Card, Text, ListItem, Rating} from 'react-native-elements';
import {TvShowGenreContext} from './TvShowGenreContext';

// @ts-ignore
function TvShowDetailScreen({route, navigation}) {
  const tvShow: TvShow = route.params.tvShow;
  const AllGenres: Genre[] = useContext(TvShowGenreContext);
  const [tvShowGenres, setTvShowGenres] = useState(['']);
  useEffect(() => {
    let genreNames: string[] = [];
    tvShow.genre_ids?.forEach((id) => {
      genreNames.push(
        AllGenres.filter((genre) => {
          return genre.id === id;
        })[0].name,
      );
    });
    setTvShowGenres(genreNames);
  }, [tvShow.genre_ids, AllGenres]);
  return (
    <ScrollView>
      <Card
        title={tvShow.name}
        image={{uri: 'https://image.tmdb.org/t/p/w500' + tvShow.poster_path}}>
        <View style={style.rating}>
          <Text>Rating</Text>
          <Rating
            imageSize={20}
            ratingCount={10}
            readonly
            startingValue={tvShow.vote_average}
          />
          <Text>{tvShow.vote_count} votes </Text>
        </View>
        <Text style={style.centered}>
          Language: {tvShow.original_language} - {tvShow.popularity} Views
        </Text>
        <Text style={style.spaced}>{tvShow.overview}</Text>
        <Text h4 style={style.spaced}>
          Genres:
        </Text>
        <View>
          {tvShowGenres.map((name) => (
            <ListItem key={name} title={name} bottomDivider />
          ))}
        </View>
        <Button
          icon={{
            type: 'material-community',
            name: 'arrow-left',
          }}
          type={'clear'}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Card>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  spaced: {
    marginTop: 16,
    marginBottom: 16,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  centered: {
    textAlign: 'center',
  },
});
export default TvShowDetailScreen;

import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Genre, Movie} from '../../model/model';
import {
  Button,
  Card,
  Image,
  Text,
  ListItem,
  Rating,
} from 'react-native-elements';
import {GenreContext} from './MovieGenreContext';

// @ts-ignore
function MovieDetailScreen({route, navigation}) {
  const movie: Movie = route.params.movie;
  const AllGenres: Genre[] = useContext(GenreContext);
  const [movieGenres, setMovieGenres] = useState(['']);
  useEffect(() => {
    let genreNames: string[] = [];
    movie.genre_ids?.forEach((id) => {
      genreNames.push(
        AllGenres.filter((genre) => {
          return genre.id === id;
        })[0].name,
      );
    });
    setMovieGenres(genreNames);
  }, []);
  return (
    <ScrollView>
      <Card
        title={movie.title}
        image={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
        featuredSubtitle={movie.original_title}>
        <View style={style.rating}>
          <Text>Rating</Text>
          <Rating
            imageSize={20}
            ratingCount={10}
            readonly
            startingValue={movie.vote_average}
          />
          <Text>{movie.vote_count} votes </Text>
        </View>
        <Text style={{textAlign: 'center'}}>
          Language: {movie.original_language} - {movie.popularity} Views
        </Text>
        <Text style={style.spaced}>{movie.overview}</Text>
        <Image
          style={{width: '100%', height: 250}}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
          }}
        />
        <Text h4 style={style.spaced}>
          Genres:
        </Text>
        <View>
          {movieGenres.map((name) => (
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
          title="Go back"
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
});
export default MovieDetailScreen;

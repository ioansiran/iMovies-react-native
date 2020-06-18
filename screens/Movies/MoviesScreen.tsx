import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopRatedMoviesScreen from './TopRatedMoviesScreen';
import MovieDetailScreen from './MovieDetailScreen';
import {Api} from '../../services/Api';
import {GenreContext} from './MovieGenreContext';
const Stack = createStackNavigator();

export default function MoviesScreen() {
  let [genres, setGenres] = useState([]);

  useEffect(() => {
    Api.getAllMovieGenres().then(({genres}) => {
      setGenres(genres);
    });
  }, []);
  return (
    <GenreContext.Provider value={genres}>
      <Stack.Navigator initialRouteName={'Movies list'} headerMode="none">
        <Stack.Screen name={'Movies list'} component={TopRatedMoviesScreen} />
        <Stack.Screen name={'Movie detail'} component={MovieDetailScreen} />
      </Stack.Navigator>
    </GenreContext.Provider>
  );
}

import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopRatedTvScreen from './TopRatedTvScreen';
import TvShowDetailScreen from './TvShowDetailScreen';
import {Api} from '../../services/Api';
import {TvShowGenreContext} from './TvShowGenreContext';

const Stack = createStackNavigator();

function TvShowsScreen() {
  let [genres, setGenres] = useState([]);

  useEffect(() => {
    Api.getAllTvGenres().then(({genres}) => {
      setGenres(genres);
    });
  }, []);
  return (
    <TvShowGenreContext.Provider value={genres}>
      <Stack.Navigator headerMode="none" initialRouteName={'TvShow list'}>
        <Stack.Screen name={'TvShow list'} component={TopRatedTvScreen} />
        <Stack.Screen name={'TvShow detail'} component={TvShowDetailScreen} />
      </Stack.Navigator>
    </TvShowGenreContext.Provider>
  );
}

export default TvShowsScreen;

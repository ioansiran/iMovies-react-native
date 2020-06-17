import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopRatedMoviesScreen from './TopRatedMoviesScreen';
import MovieDetailScreen from './MovieDetailScreen';

const Stack = createStackNavigator();

export default function MoviesScreen() {
  return (
    <Stack.Navigator initialRouteName={'Movies list'} headerMode="none">
      <Stack.Screen name={'Movies list'} component={TopRatedMoviesScreen} />
      <Stack.Screen name={'Movie detail'} component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}

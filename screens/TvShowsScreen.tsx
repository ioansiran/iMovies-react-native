import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopRatedTvScreen from './TopRatedTvScreen';
import TvShowDetailScreen from './TvShowDetailScreen';

const Stack = createStackNavigator();

function TvShowsScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'TvShow list'}>
      <Stack.Screen name={'TvShow list'} component={TopRatedTvScreen} />
      <Stack.Screen name={'TvShow detail'} component={TvShowDetailScreen} />
    </Stack.Navigator>
  );
}

export default TvShowsScreen;

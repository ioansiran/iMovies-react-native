import React from 'react';
import {Movie} from '../model/model';
import {Text, View} from 'react-native';

function MovieDetailScreen(props: Movie) {
  return (
    <View>
      <Text>{props.title} detail</Text>
    </View>
  );
}

export default MovieDetailScreen;

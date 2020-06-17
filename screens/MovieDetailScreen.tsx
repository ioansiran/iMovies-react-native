import React from 'react';
import {Text, View} from 'react-native';
import {Movie} from '../model/model';
import {Button, Card, Rating} from 'react-native-elements';

// @ts-ignore
function MovieDetailScreen({route, navigation}) {
  const movie: Movie = route.params.movie;
  return (
    <Card title={movie.title}>
      <Text>{movie.overview}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Rating</Text>
        <Rating
          imageSize={20}
          ratingCount={10}
          readonly
          startingValue={movie.vote_average}
        />
        <Text>{movie.vote_count} votes </Text>
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
  );
}

export default MovieDetailScreen;

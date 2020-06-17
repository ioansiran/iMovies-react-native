import React from 'react';
import {Card, Text, Rating, Divider, Button} from 'react-native-elements';
import {Movie} from '../model/model';
import {StyleSheet, View} from 'react-native';

function MovieListItem(props: Movie) {
  const readMore = () => {};
  return (
    <Card
      title={props.title}
      image={{uri: 'https://image.tmdb.org/t/p/w500' + props.poster_path}}
      featuredSubtitle={props.original_title}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text> Released {props.release_date} </Text>
        <Text>{props.popularity} viewers </Text>
      </View>
      <Divider style={styles.divider} />
      <Text style={{marginBottom: 10}}>{props.overview}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Rating</Text>
        <Rating
          imageSize={20}
          ratingCount={10}
          readonly
          startingValue={props.vote_average}
        />
        <Text>{props.vote_count} votes </Text>
        <Button title={'Read more'} onPress={readMore} />
      </View>
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

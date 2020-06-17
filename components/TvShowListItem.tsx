import React from 'react';
import {TvShow} from '../model/model';
import {Button, Card, Divider, Rating, Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

function TvShowListItem(props: TvShow) {
  const readMore = () => {};

  return (
    <Card
      title={props.name}
      image={{uri: 'https://image.tmdb.org/t/p/w500' + props.poster_path}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text> First aired {props.first_air_date} </Text>
        <Text>{props.popularity} viewers </Text>
      </View>
      <Divider style={styles.divider} />
      <Text style={{marginBottom: 10}}>{props.overview}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <Text>Rating</Text>
        <Rating
          imageSize={20}
          ratingCount={10}
          readonly
          startingValue={props.vote_average}
        />
        <Text>{props.vote_count} votes </Text>
      </View>
      <Button title={'Read more'} onPress={readMore} />
    </Card>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
});
export default TvShowListItem;

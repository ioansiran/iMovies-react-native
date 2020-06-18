import React from 'react';
import {TvShow} from '../model/model';
import {Button, Card, Divider, Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {trimByWord} from '../helpers/text';

function TvShowListItem({tvShow}: {tvShow: TvShow}) {
  const navigation = useNavigation();
  const readMore = () => {
    navigation.navigate('TvShow detail', {
      tvShow: tvShow,
    });
  };
  return (
    <Card
      title={tvShow.name}
      image={{uri: 'https://image.tmdb.org/t/p/w500' + tvShow.poster_path}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text> First aired {tvShow.first_air_date} </Text>
        <Text>{tvShow.popularity} viewers </Text>
      </View>
      <Divider style={styles.divider} />
      <Text style={{marginBottom: 10}}>{trimByWord(tvShow.overview)}</Text>
      <Button type={'clear'} title={'Read more'} onPress={readMore} />
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

import React from 'react';
import {Text} from 'react-native';
import {TvShow} from '../model/model';
import {Button, Card} from 'react-native-elements';

// @ts-ignore
function TvShowDetailScreen({route, navigation}) {
  const tvShow: TvShow = route.params.tvShow;
  return (
    <Card title={tvShow.name}>
      <Text>{tvShow.overview}</Text>
      <Button
        icon={{
          type: 'material-community',
          name: 'arrow-left',
        }}
        type={'clear'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Card>
  );
}

export default TvShowDetailScreen;

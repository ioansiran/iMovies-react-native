import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import MoviesScreen from './screens/Movies/MoviesScreen';
import TvShowsScreen from './screens/TvShows/TvShowsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <SafeAreaView style={style.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Movies"
          tabBarOptions={{
            activeTintColor: '#e91e63',
            style: {
              height: 40,
            },
          }}>
          <Tab.Screen name="Movies" component={MoviesScreen} />
          <Tab.Screen name=" TV Shows" component={TvShowsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  safeArea: {flex: 1, paddingBottom: 20, backgroundColor: '#FFF'},
});
export default App;

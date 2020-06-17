import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import MoviesScreen from './screens/MoviesScreen';
import TvShowsScreen from './screens/TvShowsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          paddingBottom: 20,
          backgroundColor: '#FFF',
        }}>
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
    </>
  );
};

export default App;

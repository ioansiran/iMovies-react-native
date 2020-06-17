/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopRatedMoviesScreen from './screens/TopRatedMoviesScreen';
import TopRatedTvScreen from './screens/TopRatedTvScreen';
import {SafeAreaView} from 'react-native';

declare const global: {HermesInternal: null | {}};

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Top Rated Movies">
            <Tab.Screen
              name="Top Rated Movies"
              component={TopRatedMoviesScreen}
            />
            <Tab.Screen
              name="Top Rated TV Shows"
              component={TopRatedTvScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;

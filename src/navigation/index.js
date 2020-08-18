import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

const index = () => {
  const isDark = useSelector((state) => state.app.isDark);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={!isDark ? 'dark-content' : 'light-content'}
        backgroundColor={isDark ? 'black' : 'white'}
      />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ViewNotes" component={ViewNotes} />
        <Stack.Screen name="AddNotes" component={AddNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;

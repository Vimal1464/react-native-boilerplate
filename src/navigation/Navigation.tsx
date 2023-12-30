import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Demo from '../screens/Demo';
import More from '../screens/More';
import Landing from '../screens/Landing';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

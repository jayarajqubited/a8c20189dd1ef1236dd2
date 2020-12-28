import React from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/Home';
import Info from './app/Info';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './Pages/MainPage';
import ProfilPage from './Pages/ProfilPage';
import AcceuilPage from './Pages/AcceuilPage';
import MapPage from './Pages/MapPage';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
          <Stack.Screen name="ProfilPage" component={ProfilPage} options={{ headerShown: false }} />
          <Stack.Screen name="AcceuilPage" component={AcceuilPage} options={{ headerShown: false }} />
          <Stack.Screen name="MapPage" component={MapPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
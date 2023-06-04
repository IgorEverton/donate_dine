import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/routes';
import RoutesBar from './src/routes/routesBar'

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <RoutesBar/>
    </NavigationContainer>
  );
}



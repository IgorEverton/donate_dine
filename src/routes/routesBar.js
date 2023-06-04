import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import Login from '../components/Login';
import Cadastro from '../components/Cadastro';
import Pesquisa from '../components/Pesquisa';
import Dashboard from '../components/Dashboard';
import Perfil from '../components/Perfil';
import Doar from '../components/Doar';

const {Navigator, Screen} = createBottomTabNavigator();

export default function RoutesBar(){
    return(
    <Navigator
    useLegacyImplementation
    tabBarOptions={{
      tabStyle: { backgroundColor: "#FFB800" },
      activeTintColor: "black",
      inactiveTintColor: "#A48000"
    }}
  >
    <Screen
      name="Pesquisar"
      component={Pesquisa}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="search1" size={size} color={color} />
        )
      }}
    />
    <Screen
      name="DashBoard"
      component={Dashboard}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <Entypo name="bar-graph" size={size} color={color} />
        )
      }}
    />
    <Screen
      name="Perfil"
      component={Perfil}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account"
            size={size}
            color={color}
          />
        )
      }}
    />
    <Screen
      name="Doação"
      component={Doar}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <Feather name="gift" size={size} color={color} />
        )
      }}
    />
  </Navigator>
)
}


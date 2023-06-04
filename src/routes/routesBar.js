import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Pesquisa from '../components/Pesquisa';
import Dashboard from '../components/Dashboard';
import Perfil from '../components/Perfil';
import Doar from '../components/Doar';

const {Navigator, Screen} = createBottomTabNavigator();

function RoutesBar(){
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
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="search1" size={size} color={color} />
        )
      }}
    />
    <Screen
      name="DashBoard"
      component={Dashboard}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name="bar-graph" size={size} color={color} />
        )
      }}
    />
    <Screen
      name="Perfil"
      component={Perfil}
      options={{
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
        tabBarIcon: ({ size, color }) => (
          <Feather name="gift" size={size} color={color} />
        )
      }}
    />
  </Navigator>

}

export default RoutesBar;
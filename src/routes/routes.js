import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import RoutesBar from './routesBar';

import Login from '../components/Login';
import Cadastro from '../components/Cadastro';
import Pesquisa from '../components/Pesquisa';
import Dashboard from '../components/Dashboard';
import Perfil from '../components/Perfil';
import Doar from '../components/Doar';


const Stack = createNativeStackNavigator();

export default props => (
    <Stack.Navigator  initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Pesquisa" component={RoutesBar}/>
        <Stack.Screen name="Doar" component={Doar}/>
    </Stack.Navigator>
    )

export function PesquisaNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Pesquisa"
            component={Pesquisa}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}
export function DashboardNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
export function PerfilNaNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
export function DoarNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Doar"
            component={Doar}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
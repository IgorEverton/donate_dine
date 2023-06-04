import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../components/Login';
import Cadastro from '../components/Cadastro';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />

        <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
        
        
    )
}
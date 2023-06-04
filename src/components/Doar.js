import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

  const estilos = {
    h1:{
      textAlign:"center",
      fontSize:35, fontWeight:"bold",
      marginTop:"40px", marginBottom:"40px"
    },
    input:{
      backgroundColor:"white",
      height:"40px", width:"250px",
      borderRadius:"5px", 
      marginTop:"5px",  paddingLeft: 10,
      fontSize:"13px", fontWeight: 300,
      letterSpacing: 1.5
    },
    botaoCadastrar:{
      backgroundColor:"#0B8700",  color:"white",
      width:"180px", height:"40px", 
      borderRadius:"5px", 
      justifyContent:"center", alignItems:"center", 
      marginVertical: 50,marginBottom:"5%"
    }
  }

function InputText(props){

  return(
    <>
      <View style={{marginTop:"35px"}}>
        <Text style={{fontSize:15, fontWeight: 500, paddingLeft: 10,color:"white"}}>{props.titulo}</Text>
        <TextInput placeholder={props.placeholder} style={estilos.input}/>
      </View>
    </>
  )
}

const CadastroForm = () =>{
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");

      return(
      <View style={{display:"flex",flex:1, margin:25}}>
        <View style={{alignItems:"center"}}>
        <Text style={{textAlign:"center",fontSize:34, fontWeight:"bold",marginTop:"80px",color:"white"}}>Cadastrar Doação</Text>
          <InputText titulo={"Selecionar estoque disponível"}/>
          <InputText titulo={"CNPJ"}/>
          <InputText titulo={"Descrição"}/>
            <TouchableOpacity style={estilos.botaoCadastrar}>
                <Text style={{color:"white", fontSize:18 }}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={{color:"#3DA2FF",marginTop:"32px",fontWeight: 600}}>
              <TouchableOpacity>Voltar</TouchableOpacity>
            </Text>
        </View>
      </View>
  )
  }



export default ()=>{
  return(
    <NavigationContainer>
      <View style={{flex:1, backgroundColor:"black"}}> 
        <CadastroForm/>
                  <View>
              <Navigator useLegacyImplementation tabBarOptions={{tabStyle:{backgroundColor:"#FFB800"}, activeTintColor:"black", inactiveTintColor:"#A48000" }}>
                <Screen name="Pesquisar"
                options={{tabBarIcon:({size, color}) => (
              <AntDesign name="search1" size={size} color={color}/>
            )}}/>
                <Screen name="DashBoard"
                options={{tabBarIcon:({size, color}) => (
              <Entypo name="bar-graph" size={size} color={color}/>
            )}}/>
                <Screen name="Perfil"
                options={{tabBarIcon:({size, color}) => (
              <MaterialCommunityIcons name="account" size={size} color={color}/>
            )}}/>
                <Screen name="Doação"
                options={{tabBarIcon:({size, color}) => (
              <Feather name="gift" size={size} color={color}/>
            )}}/>
              </Navigator>
            </View>
      </View>
    </NavigationContainer>
  )
}
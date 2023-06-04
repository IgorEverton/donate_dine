import React,  {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import Cadastro from './Cadastro';

const LoginForm = () =>{
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async function salvarAuthToken() {
      await AsyncStorage.setItem('authToken', authToken);
    }

    salvarAuthToken();
  }, []);

      return(
      <View style={{display:"flex",flex:1, margin:25,alignItems:"center", backgroundColor:"black"}}>
        
        <Text style={{textAlign:"center",fontSize:37, fontWeight:"bold",marginTop:"180px", marginBottom:"30px", color:"white"}}>DONATE DINE</Text>

        <View style={{marginTop:"35px"}}>
          <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}>E-mail</Text>
          <TextInput onChangeText={setEmail} style={{backgroundColor:"white", height:"30px", width:"250px",borderRadius:"5px"}}/>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"32px",width:"250px"}}>
          <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}>Senha</Text>       
          <TouchableOpacity><Text style={{color:"#3DA2FF"}}>Esqueceu sua senha?</Text></TouchableOpacity>

        </View>
          <TextInput onChangeText={setSenha} style={{backgroundColor:"white", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"40px"}}/>
            <TouchableOpacity style={{backgroundColor:"#0B8700", width:"110px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", color:"white"}}>
                <Text style={{color:"white", fontSize:18 }}>Logar</Text>
            </TouchableOpacity>  
            <Text style={{fontWeight:200, color:"#3DA2FF",marginTop:"32px"}}>Não tem conta? 
              <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={{ fontWeight: 600}}> Se cadastre clicando aqui</TouchableOpacity>
            </Text>
      </View>
  )
  }



export default ()=>{
  return(
    <View style={{flex:1, backgroundColor:"black"}}> 
      <LoginForm/>
    </View>
  )
}
import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';;
import axios from 'axios'

const Perfil=({token})=>{
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const atualizarPerfil = async () => {
    try {
      // Fazer a chamada para a API
      const response = await axios.put('http://localhost:8080/api/usuario/{id}', {
        nome: nome,  
        mail: email,
        senha: senha,
      },{
      headers:{
        Authorization:`Bearer ${token},` 
      }});

      // Tratar a resposta da API conforme necessário

      // Limpar os campos após a atualização
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      console.log(error);
      // Tratar erros de atualização do perfil aqui
    }
  };

      return(
      <View style={{display:"flex",flex:1, margin:25}}>
        <View style={{ alignItems:"end", marginRight:"40px"}}>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={{textAlign:"center",fontSize:35, fontWeight:"bold",marginTop:"40px", marginBottom:"40px", color:"white"}}>Perfil</Text>

          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}>Novo E-mail</Text>
            <TextInput style={{backgroundColor:"white", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}/>
          </View>


          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}>Confime o novo E-mail</Text>
            <TextInput style={{backgroundColor:"white", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}/>
          </View>

          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"32px",width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}>Nova senha</Text>       
          </View>
          <TextInput style={{backgroundColor:"white", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"40px", fontSize:"14px", color:"#13293D"}}/>

          <View style={{width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"white"}}>Confime sua senha</Text>       
          </View>

          <TextInput style={{backgroundColor:"white", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"20px", fontSize:"14px", color:"#13293D"}}/>
            <TouchableOpacity onPress={atualizarPerfil} style={{backgroundColor:"#0B8700", color:"white", width:"180px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", marginVertical:50,marginBottom:"5%"}}>
                <Text style={{color:"white", fontSize:18 }}>Atualizar</Text>
            </TouchableOpacity> 
        </View>
      </View>
  )
  }




export default function App() {
  return (
      <View style={{flex:1, backgroundColor:"black"}}> 
        <Perfil/>
      </View>
  );
}



import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';

  const estilos = {
    h1:{
      textAlign:"center",
      fontSize:35, fontWeight:"bold",
      marginTop:"40px", marginBottom:"40px"
    },
    input:{
      backgroundColor:"white",
      height:"30px", width:"250px",
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


  const handleCadastro = () => {
    // Criar um objeto com os dados do formulário
    const formData = {
      nome: nome,
      email: email,
      senha: senha,
    };
    // Fazer a chamada à API usando o Axios
    axios.post('http://localhost:8080/api/usuario/cadastrar', formData)
      .then(response => {
        // Manipular a resposta da API, se necessário
        console.log(response.data);
      })
      .catch(error => {
        // Manipular os erros, se ocorrerem
        console.error(error);
      });
  };
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
        <Text style={{textAlign:"center",fontSize:43, fontWeight:"bold",marginTop:"80px",color:"white"}}>Cadastro</Text>
          <InputText titulo={"Nome"}/>
          <InputText titulo={"E-mail"}/>
          <InputText titulo={"Nova senha"}/>
          <InputText titulo={"Confime sua senha"}/>
            <TouchableOpacity style={estilos.botaoCadastrar}>
                <Text style={{color:"white", fontSize:18 }}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={{color:"#3DA2FF",marginTop:"32px",fontWeight: 600}}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>Voltar</TouchableOpacity>
            </Text>
        </View>
      </View>
  )
  }

export default ()=>{
  return(
    <View style={{flex:1, backgroundColor:"black"}}>
      <CadastroForm/>
    </View>
  )
}


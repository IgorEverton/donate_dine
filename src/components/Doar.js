import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Picker} from 'react-native';
import axios from 'axios'

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
        <TextInput placeholder={props.placeholder} style={estilos.input} value={props.value} onChangeText={props.onChangeText}/>
      </View>
    </>
  )
}

const DoacaoForm = () =>{
  const [estoqueSelecionado, setEstoqueSelecionado] = useState(null);
  const [cnpj, setCnpj] = useState('');
  const [descricao, setDescricao] = useState('');
  const handleEstoqueChange = (itemValue) => {
    setEstoqueSelecionado(itemValue);
  };

  
  const cadastrarDoacao = async () => {
    try {
      // Fazer a chamada para a API
      const response = await axios.post('http://localhost:8080/api/doacao', {
        estoque: estoqueSelecionado,
        cnpj: cnpj,
        descricao: descricao
      });

      // Tratar a resposta da API conforme necessário

      // Limpar os campos após o cadastro
      setEstoqueSelecionado(null);
      setCnpj('');
      setDescricao('');
    } catch (error) {
      console.log(error);
      // Tratar erros de cadastro de doação aqui
    }
  };

      return(
      <View style={{display:"flex",flex:1, margin:25}}>
        <View style={{alignItems:"center"}}>
        <Text style={{textAlign:"center",fontSize:34, fontWeight:"bold",marginTop:"80px",color:"white"}}>Cadastrar Doação</Text>
        <View>
          <Picker
            selectedValue={estoqueSelecionado}
            style={estilos.input}
            onValueChange={handleEstoqueChange}>
            <Picker.Item label="Selecione um estoque" value={null} />
            <Picker.Item label="Estoque 1" value="estoque1" />
            <Picker.Item label="Estoque 2" value="estoque2" />
            <Picker.Item label="Estoque 3" value="estoque3" />
          </Picker>
        </View>
          <InputText titulo={"CNPJ"}/>
          <InputText titulo={"Descrição"}/>
          <TouchableOpacity onPress={cadastrarDoacao} style={estilos.botaoCadastrar}>
            <Text style={{color:"white", fontSize:18 }}>Cadastrar</Text>
          </TouchableOpacity>
          <Text style={{color:"#3DA2FF",marginTop:"32px",fontWeight: 600}}>
            <TouchableOpacity onPress={() => navigation.navigate('Pesquisa')}>Voltar</TouchableOpacity>
          </Text>
        </View>
      </View>
  )
  }



export default ()=>{
  return(
      <View style={{flex:1, backgroundColor:"black"}}> 
        <DoacaoForm/>
      </View>
  )
}
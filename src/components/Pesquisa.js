import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Modal} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';



const Pesquisa=()=>{
  const [selectLote, setSelectLote] = useState();
  const [selectEstoque, setSelectEstoque] = useState();
  const [selectedOption, setSelectedOption] = useState("lote");
  const [selectedValue, setSelectedValue] = useState("id");
  const [valueInput, setValueInput] = useState("");


  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if(option === "lote") {
      setSelectedValue("id");
    } else if(option === "estoque") {
      setSelectedValue("id");
    } else if(option === "doacao") {
      setSelectedValue("id");
    }
  };
  const renderPickerItems = () => {
    if(selectedOption === "lote") {
      return (
        <>
          <Picker.Item label="Id" value="id" />
          <Picker.Item label="Quantidade" value="quantidade" />
          <Picker.Item label="Unidade de Medida" value="unidade_medida" />
          <Picker.Item label="Fornecedor" value="fornecedor" />
          <Picker.Item label="Data de Criação" value="data_criacao" />
        </>
      );
    } else if(selectedOption === "estoque") {
      return <Picker.Item label="Id" value="id" />;
    } else if(selectedOption === "doacao") {
      return (
        <>
          <Picker.Item label="Id" value="id" />
          <Picker.Item label="CNPJ" value="cnpj" />
        </>
      );
    }
  };
    const handleSearch = () => {
      let endpoint;
      const token = 'yourBearerToken'; // Substitua isso pelo seu token Bearer
      if(selectedOption === "lote") {
        switch (selectedValue) {
          case "id":
            endpoint = `http://localhost:8080/api/lote/${valueInput}`;
            break;
          case "quantidade":
            endpoint = `http://localhost:8080/api/lote/quantidade/${valueInput}`;
            break;
          case "unidade_medida":
            endpoint = `http://localhost:8080/api/lote/unidade_medida/${valueInput}`;
            break;
          case "fornecedor":
            endpoint = `http://localhost:8080/api/lote/fornecedor/${valueInput}`;
            break;
          case "data_criacao":
            endpoint = `http://localhost:8080/api/lote/datacriacao/${valueInput}`;
            break;
          default:
            break;
        }
      } else if(selectedOption === "estoque") {
        endpoint = `http://localhost:8080/api/estoque/${valueInput}`;
      } else if(selectedOption === "doacao") {
        switch (selectedValue) {
          case "id":
            endpoint = `http://localhost:8080/api/doacao/${valueInput}`;
            break;
          case "cnpj":
            endpoint = `http://localhost:8080/api/doacao/cnpj/${valueInput}`;
            break;
          default:
            break;
        }
      }
      axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
  return(
    <View style={{flex:1, backgroundColor:"black", alignItems:"center"}} >
      <Text style={{fontSize:33, fontWeight:"bold",marginTop:"20px",color:"white",marginBottom: 20}}>Pesquisar</Text>
      <View>
        <Text style={{color:"white", marginBottom:2}}>Pesquisar por:</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {renderPickerItems()}
        </Picker>
        <br/>
        <TextInput style={{height:"35px", width:"250px",borderRadius:"7px", backgroundColor:"white"}} value={valueInput} onChangeText={txt => setValueInput(txt)}/>
      </View>
      <RadioButton.Group
        onValueChange={handleOptionChange}
        value={selectedOption}>
      <View style={{flexDirection: "row"}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="lote" uncheckedColor="white"/>
          <Text style={{ marginRight: 27, color: 'white' }}>Lote</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="estoque" uncheckedColor="white"/>
          <Text style={{ marginRight: 27, color: 'white' }}>Estoque</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="doacao" uncheckedColor="white"/>
          <Text style={{ color: 'white' }}>Doação</Text>
        </View>
      </View>
      </RadioButton.Group>
      <TouchableOpacity style={{backgroundColor:"#C30000", width:"110px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", color:"white"}}>
        <Text style={{color:"white", fontSize:18 }}>Pesquisar</Text>
      </TouchableOpacity>
    </View>
)
}
const DetalheRecuperado=({ visible, onClose })=>{
  const navigation = useNavigation();
    if (!visible) {
    return null;
  }
  return(
      <View style={{flex:1, alignItems:"center",backgroundColor:"#232323", justifyContent:"center"}}>
        <View style={{width:"300px", height:"180px", backgroundColor:"black"}}>
          <Text style={{color:"white", marginLeft:10, marginTop:7}}>Data Chegada: 01/01/2021</Text>
          <Text style={{color:"white", marginLeft:10, marginTop:7}}>Quantidade: 230</Text>
          <Text style={{color:"white", marginLeft:10, marginTop:7}}>Unidade de medida: Kilograma</Text>
          <Text style={{color:"white", marginLeft:10, marginTop:7}}>Descrição: Esse lote foi recebido corretamente pelo funcionário Tal às 7h35, entregue por Fulano utilizando o veículo XPTO de placa ABC-0123</Text>
        </View>
          <TouchableOpacity onPress={() => navigation.navigate('Doar')} style={{backgroundColor:"#0B8700", color:"white", width:"180px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", marginVertical: 50,marginBottom:"5%", marginTop:170}}>
            <Text style={{color:"white", fontSize:18 }}>Cadastrar Doação</Text>
          </TouchableOpacity>
          <Text style={{color:"#3DA2FF",marginTop:"25px",fontWeight: 600}}>
            <TouchableOpacity onPress={onClose}>Voltar</TouchableOpacity>
          </Text> 
      </View>
  )

}
const Recuperados=()=>{
  const [visibleModal, setVisibleModal] = useState(false);
  return(
    <View style={{flex:1, alignItems:"center", marginTop:10}}>
      <TouchableOpacity onPress={()=>setVisibleModal(true)} style={{width:"300px", height:"80px", backgroundColor:"black"}}>
        <Text style={{color:"white", marginLeft:10, marginTop:5}}>Data Chegada: 01/01/2021</Text>
        <Text style={{color:"white", marginLeft:10, marginTop:5}}>Quantidade: 230</Text>
        <Text style={{color:"white", marginLeft:10, marginTop:5}}>Unidade de medida: Kilograma</Text>
      </TouchableOpacity>
      <Modal style={{flex:1}}
        animationType="slide"
        visible={visibleModal}
        transparent={true}
        onRequestClose={()=>setVisibleModal(false)}>
          <DetalheRecuperado visible={visibleModal} onClose={() => setVisibleModal(false)} />
      </Modal>
    </View>
  )
}

export default ()=>{
  return (
      <View style={{ flex: 1 }}>
        <View style={{ flex:4 }}>
              <>
                <Pesquisa />
              </>
        </View>
        <View style={{ flex: 8, backgroundColor: "#232323" }}>
          <ScrollView>
              <>
                <Recuperados />
                <Recuperados />
                <Recuperados />
                <Recuperados />
                <Recuperados />
              </>
          </ScrollView>
        </View>
      </View>
  );
}
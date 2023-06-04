import React, {useState} from 'react';
import { Text, View, TextInput, CheckBox, TouchableOpacity, ScrollView, Modal} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

const Pesquisa=()=>{
  const [selectLote, setSelectLote] = useState();
  const [selectEstoque, setSelectEstoque] = useState();
  const [selectDoacao, setSelectDoacao] = useState();
  return(
    <View style={{flex:1, backgroundColor:"black", alignItems:"center"}} >
      <Text style={{fontSize:33, fontWeight:"bold",marginTop:"20px",color:"white",marginBottom: 20}}>Pesquisar</Text>
      <View>
        <Text style={{color:"white", marginBottom:2}}>ID</Text>
        <TextInput style={{height:"35px", width:"250px",borderRadius:"7px", backgroundColor:"white"}}/>
      </View>
      <View style={{flexDirection:'row', marginBottom: 20, marginTop:11}}>
        <CheckBox style={{marginRight:5}} value={selectLote} onValueChange={setSelectLote}/>
        <Text style={{color:"white",marginRight:27}}>Lote</Text>
        <CheckBox style={{marginRight:5}} value={selectEstoque} onValueChange={setSelectEstoque}/>
        <Text style={{color:"white",marginRight:27}}>Estoque</Text>
        <CheckBox style={{marginRight:5}} value={selectDoacao} onValueChange={setSelectDoacao}/>
        <Text style={{color:"white"}}>Doação</Text>
      </View>
      <TouchableOpacity style={{backgroundColor:"#C30000", width:"110px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", color:"white"}}>
        <Text style={{color:"white", fontSize:18 }}>Pesquisar</Text>
      </TouchableOpacity>
    </View>
)
}

const DetalheRecuperado=({ visible, onClose })=>{
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
          <TouchableOpacity style={{backgroundColor:"#0B8700", color:"white", width:"180px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", marginVertical: 50,marginBottom:"5%", marginTop:170}}>
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
    <NavigationContainer>
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
            <View>
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
                  options={{
                    tabBarIcon: ({ size, color }) => (
                      <AntDesign name="search1" size={size} color={color} />
                    )
                  }}
                />
                <Screen
                  name="DashBoard"
                  options={{
                    tabBarIcon: ({ size, color }) => (
                      <Entypo name="bar-graph" size={size} color={color} />
                    )
                  }}
                />
                <Screen
                  name="Perfil"
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
                  options={{
                    tabBarIcon: ({ size, color }) => (
                      <Feather name="gift" size={size} color={color} />
                    )
                  }}
                />
              </Navigator>
            </View>
        </View>
      </View>
    </NavigationContainer>
  );
}
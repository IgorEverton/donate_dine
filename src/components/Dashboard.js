import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import axios from 'axios'


const fetchData = (token) => {
  axios
    .get('http://localhost:8080/api/stats', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // Manipule a resposta da API e atualize o estado com os dados recebidos
      console.log(response.data);
      setTotalLotesCadastrados(response.data.totalLotesCadastrados);
      setTotalLotesDoados(response.data.totalLotesDoados);
      setTotalAlimentoRecebido(response.data.totalAlimentoRecebido);
      setTotalAlimentosDoados(response.data.totalAlimentoRecebido);
      setMaiorFornecedor(response.data.maiorFornecedor);
      setAlimentoDoados(response.data.alimentoDoados);
    })
    .catch((error) => {
      // Manipule os erros, se ocorrerem
      console.error(error);
    });
};

const RetornoDash = ({ token }) => {
  useEffect(() => {
    fetchData(token);
  }, [token]);

    const [totalLotesCadastrados, setTotalLotesCadastrados] = useState(0);
    const [totalLotesDoados, setTotalLotesDoados] = useState(0);
    const [totalAlimentoRecebido, setTotalAlimentoRecebido] = useState(0);
    const [totalAlimentosDoados, setTotalAlimentosDoados] = useState(0);
    const [maiorFornecedor, setMaiorFornecedor] = useState(0);
    const [alimentoDoados, setAlimentoDoados] = useState(0);
    

  return(
      <View style={{flex:1, backgroundColor:"black", alignItems:"center"}}>
      <Text style={{fontSize:38, fontWeight:"bold",marginTop:20,color:"white",marginBottom: 53}}>DashBoard</Text>
      <View style={{borderWidth:2, borderColor:"white", width:310, height:205,alignItems:"center",borderRadius:10,marginBottom:36}}>
        <AnimatedCircularProgress style={{marginTop:18, marginBottom:10}}
          size={120}
          width={25}
          fill={70}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#00e0ff"}}></View>
          <Text style={{ color: 'white', marginRight: 80, marginBottom: 5 }}>Total de lotes cadastrados: {totalLotesCadastrados}
</Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#3d5875"}}></View>
          <Text style={{ color: 'white', marginRight: 80, marginBottom: 5 }}>Total de lotes doados: {totalLotesDoados}
</Text>
        </View>
      </View>
      <View style={{borderWidth:2, borderColor:"white", width:310, height:205,alignItems:"center",borderRadius:10,marginBottom:36}}>
        <AnimatedCircularProgress style={{marginTop:18, marginBottom:10}}
          size={120}
          width={25}
          fill={30}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#00e0ff"}}></View>
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de alimentos recebido: {totalAlimentoRecebido}</Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#3d5875"}}></View>
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de alimentos doados: {totalAlimentosDoados}</Text>
        </View>
      </View>
      <View style={{borderWidth:2, borderColor:"white", width:310, height:205,alignItems:"center",borderRadius:10,marginBottom:36}}>
        <AnimatedCircularProgress style={{marginTop:18, marginBottom:10}}
          size={120}
          width={25}
          fill={90}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#00e0ff"}}></View>
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Marior fornecedor: {maiorFornecedor}</Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#3d5875"}}></View>
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Alimento recebido:{alimentoDoados}</Text>
        </View>
      </View>
    </View>
  )
}

export default function App() {
  return (
      <View>
        <View style={{flex:1}}>
          <RetornoDash/>
        </View>
      </View>
  );
}

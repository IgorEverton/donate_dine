import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const {Navigator, Screen} = createBottomTabNavigator();

const RetornoDash=()=>{
  return(
      <View style={{flex:1, backgroundColor:"black", alignItems:"center"}}>
      <Text style={{fontSize:38, fontWeight:"bold",marginTop:20,color:"white",marginBottom: 53}}>DashBoard</Text>
      <View style={{borderWidth:2, borderColor:"white", width:310, height:205,alignItems:"center",borderRadius:10,marginBottom:20}}>
        <AnimatedCircularProgress style={{marginTop:18}}
          size={120}
          width={25}
          fill={70}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
        <Text style={{fontSize:20, fontWeight:"bold", color:"white", marginTop:5,marginBottom: 60}}>Lotes Doados</Text>
      </View>
      <View style={{borderWidth:2, borderColor:"white", width:310, height:205,alignItems:"center",borderRadius:10,marginBottom:20}}>
        <AnimatedCircularProgress style={{marginTop:18}}
          size={120}
          width={25}
          fill={30}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
        <Text style={{fontSize:20, fontWeight:"bold", color:"white", marginTop:5,marginBottom: 60}}>Ocupação do estoque</Text>
      </View>
      <View style={{borderWidth:2, borderColor:"white", width:310, height:205,alignItems:"center",borderRadius:10,marginBottom:20}}>
        <AnimatedCircularProgress style={{marginTop:18}}
          size={120}
          width={25}
          fill={90}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
        <Text style={{fontSize:20, fontWeight:"bold", color:"white", marginTop:5,marginBottom: 60}}>Lotes Doados</Text>
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


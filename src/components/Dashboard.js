import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const RetornoDash=()=>{
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
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de lotes cadastrados</Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#3d5875"}}></View>
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de lotes doados</Text>
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
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de lotes cadastrados</Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#3d5875"}}></View>
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de lotes doados</Text>
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
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de lotes cadastrados</Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 30, width: "100%"}}>
          <View style={{height: 15, width:15, backgroundColor:"#3d5875"}}></View>
          <Text style={{color:"white", marginRight:80, marginBottom: 5}}> Total de lotes doados</Text>
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


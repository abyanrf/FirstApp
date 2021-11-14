import React from 'react';
import { View,Text,Image, TouchableOpacity, ScrollView, StyleSheet,TextInput} from 'react-native';
import no1 from '../../assets/image/no1.png'
import no2 from '../../assets/image/no2.png'
import vector2 from '../../assets/icon/Vector2.png'
import search from "../../assets/icon/search.png";
import duduk from "../../assets/image/duduk.png";

const Scroll=(props)=>{
    return(
        <View>
            <View style={{width:146,height:107,backgroundColor:'#ECC2B9',borderRadius:18,marginHorizontal:10}}>
                        <Image source={props.foto} style={{marginTop:12}} />
                    </View>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:15}}> {props.tugas} </Text>
                        <Text style={{fontSize:11,fontWeight:'600',marginLeft:22,color:'grey'}}>{props.total}</Text>
        </View>
    )
}
const App = () => {
  return (
   <ScrollView style={Style1.background}>
       <Text>kdsjhgkjdfkjhdsjkgfjad</Text>
       
     
       
   </ScrollView>
  )
}

const Style1 =StyleSheet.create({

    backgroundColor2:{
        backgroundColor:'#eee',width:412,height:1500,borderRadius:30,position:'absolute',top:371,flex:1
    },
    iconse:{
        position:'absolute',
        top:54,
        left:43,

    },
    search:{
        width:277,
        height:42,
        borderRadius:35,
        paddingLeft:30,
        position:'absolute',
        top:42,
        left:35,
        backgroundColor:'#ecf0f1',
        opacity:0.5 
    },
    text:{fontSize :70},

    background:{backgroundColor:'#AF4A53',flex:1}

})


export default App;
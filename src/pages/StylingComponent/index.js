import React from "react";
import {Image,StyleSheet, Text, View, } from 'react-native';
import {poto1} from '../../assets/image/poto1.jpg'

const StylingComponent =()=>{
    return (
        <View>
            <Text style={Styles.text}>abyan keren</Text>
            <View 
            style={{
                width:100,
                height:100,
                backgroundColor:'#27ae60',
                borderWidth:2,
                borderColor:'#2ecc71',
                marginTop:20,
                marginLeft:20
            }}/>


    <View style={{padding:12,backgroundColor:'#bdc3c7',width:212, borderRadius:8}}>
        <Image source={poto1} style={{width:188,height:107,borderRadius:8}}/>
        <Text style={{fontSize:14,fontWeight:'bold',marginTop:16}}>Hp 14s 2019</Text>
        <Text style={{fontWeight:'bold',fontSize:12,color:'#e67e22',marginTop:12}}>Rp.   8.500.000</Text>
        <Text style={{fontSize:12,fontWeight:'300',marginTop:12}}>Tangerang selatan</Text> 
        {/* //paddingVertical=top-bottom */}
    <View style={{backgroundColor:'#2ecc71',paddingVertical:6 ,borderRadius:25,marginTop:20}}>
        <Text style={{fontSize:14,fontWeight:'600',color:'#ecf0f1',textAlign:'center'}}>BELI</Text>
    </View>

     </View>                     
   </View>
    )

}
const Styles = StyleSheet.create({
    text: {
        marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
    }
})
export default StylingComponent;
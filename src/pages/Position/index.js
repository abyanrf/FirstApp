import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import cart from '../../assets/icon/cart.png'


const Position = () => {
    return (
    <View style={Style.wrapper}>
        <View style={Style.kotak} >
          <Image  source={cart} style={Style.iconcart}/>
          <Text style={Style.icon}>10</Text>
        </View>
        <Text>keranjang belanja</Text>



    </View>
    )
}


const Style = StyleSheet.create(
  {icon:{fontSize:12,
    color:'#ecf0f1',
    width:24,
    height:24,
    backgroundColor:'#2ecc71',
  borderRadius:25,
  padding:4,
position:'absolute',
top:0,
right:0},


  wrapper:{padding:14,alignItems:'center'},

  kotak:{
    borderWidth:2,
    borderColor:'#2c3e50',
    width:93,
    height:93,
    borderRadius:93/2,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:5,
    position:'relative'
    
  },
  iconcart :{
    width:50,
    height:50

  }
});


export default Position

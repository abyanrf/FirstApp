import React from 'react'
import { View, Text,StyleSheet, } from 'react-native'

 function Coba() {
    return (
        <View style={
            style.wrapper
        }>
        <View style={style.button}>
            <Text style={style.text}>Abyan</Text>
        <View style={style.icon}>
            <Text>06</Text>


        </View>

        </View>

            <Text>salamn</Text>

        </View>
    )
}
const style =StyleSheet.create({
    text:{
        fontSize:24,
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
       margin:3
        
    },
    button:{backgroundColor:'#3867d6',
    width:120,
    height:40,

    borderRadius:120/2,
    position:'relative'
    },
    wrapper:{
        alignItems:'center',
        padding:14,
       
    },
    icon:{
        width:24,
        height:24,
        backgroundColor:'#26de81',
        borderRadius:24/2,
        padding:3,
        position:'absolute',
        right:0,
        bottom:0
     

    }

})

export default Coba
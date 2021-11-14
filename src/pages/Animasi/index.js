import { StackActions } from '@react-navigation/routers'
import React from 'react'
import { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import ss from '../../assets/image/ss.jpg'


class Animasi extends Component{

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.dispatch(StackActions.replace('SplaceScreen'))  
        },2500)
    }
    render(){
        return(
            <View style={{flex:1,position:'relative'}}>
            <ImageBackground source={ss} style={Style.background}>


            <Text style={Style.pulang} >P U L A N G</Text>
            <Text style={Style.back}>Back to home</Text>
           


            </ImageBackground>
        </View>
        )
    }
}






const Style = StyleSheet.create({ 
    
    
    back:{
        fontSize:14,
        fontFamily:'roboto',
        color:'#eee',
        position:'absolute',
        height:16,
        left:31,
        top:92

    },

    pulang:{color:'#eee',
        fontSize:40,
       fontFamily:"roboto",
       position:'absolute',
       width:205,
       height:47,
       left:26,
       top:41
    },

    background:{
        flex:1
    }
})
export default Animasi;


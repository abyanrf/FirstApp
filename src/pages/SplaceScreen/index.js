import React from 'react'
import { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import ss from '../../assets/image/ss.jpg'


class SplaceScreen extends Component{
    render(){
        return(
            <View style={{flex:1,position:'relative'}}>
            <ImageBackground source={ss} style={Style.background}>


            <Text style={Style.pulang} >P U L A N G</Text>
            <Text style={Style.back}>Back to home</Text>
            
            <View style={{alignItems:'center',top:530}}>
           <TouchableOpacity style={Style.login1} onPress={() => this.props.navigation.push('HalLogin')}>
                <View >
                    <Text style={Style.login} >LOGIN</Text>
                </View>
           </TouchableOpacity>

           <TouchableOpacity style={Style.sign2} onLongPress={()=>this.props.navigation.navigate('SignUp')}>
               <Text style={Style.sign}>Sign up</Text>
           </TouchableOpacity>
                
            </View>


            </ImageBackground>
        </View>
        )
    }
}






const Style = StyleSheet.create({ 
    sign2:{
        marginTop:10
    },
    sign:{
        fontSize:20,
        textAlign:'center',
        color:'#787B87',
        textDecorationLine:'underline',
       
    },

    login1:{
        width:249,
        height:49,
        backgroundColor:'#1F30CD',
        borderRadius:109,
      
    },
    
    login:{
        marginTop:4,
        fontSize:30,
        color:'#eee',
        textAlign:"center"
     
    },

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
export default SplaceScreen


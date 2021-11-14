import React, { Component } from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Image} from 'react-native'
import matabuka from '../../assets/icon/matabuka.png'


class SignUp extends Component{
state={
    press : true
}

    render(){
        return (
            <View>
                <Text style={Styles.sign}>Sign Up</Text>
    
                <TextInput placeholder='First Name' style={Styles.first}/>
                <TextInput placeholder='Last Name' style={Styles.last}/>
                <TextInput placeholder='Email addres' style={Styles.last}/>
                <View>
                    <TextInput secureTextEntry={this.state.press} placeholder='Set A Password' style={Styles.last}/>
                    <TouchableOpacity onPress={()=> this.setState({press:!this.state.press}) } style={Styles.eye2}>
                        <Image source={matabuka} style={Styles.eye}/>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home2')}>
                <View style={Styles.login2}>
                <Text style={Styles.login}>Get A started</Text>
                </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}
export default SignUp

const Styles = StyleSheet.create({ 
    eye2:{
        position:'absolute',
        top:11,
        left:330
    },
    eye:{
        width:21,
        height:20,
        
    },
    login2:{
        width:307,
        height:42,
        borderRadius:13,
        backgroundColor:'#82B1CB',
        marginHorizontal:55

        },
        login:{
            fontSize:24,
            color:'#eeee',
            textAlign:'center',
            marginTop:5
          
        },
    last:{
        width:307,
        height:42,
        borderWidth:1,
        borderRadius:9,
        marginBottom:21,
        marginHorizontal:55
    },
  
    first:{
        width:307,
        height:42,
        borderWidth:1,
        borderRadius:9,
        marginTop:50,
        marginBottom:21,
        marginHorizontal:55
    },
    sign:{
        fontSize:36,
        textAlign:'center',
        color:'#1F2F6A',
        marginTop:49
        
    }
})



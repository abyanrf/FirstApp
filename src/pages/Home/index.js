import React ,{Component}from "react";
import { View,Text,StyleSheet,TextInput,TouchableOpacity, Image } from "react-native";
import matabuka from '../../assets/icon/matabuka.png'
class Home extends Component{
    state={
        press :true,
        email:'Email'


    }
    render(){
        return (
            <View >
      
    
                <View style={{alignItems:'center'}}>
                    
                <Text style={Style.text} >P U L A N G</Text>
            
                    <TextInput  placeholder= {this.state.email} style={Style.email}/>
                        <View>
                            <TextInput  placeholder='Password' style={Style.password} secureTextEntry={this.state.press}/>
                            <TouchableOpacity style={Style.eye2} onPressOut={()=>this.setState({press:!this.state.press})}>
                            <Image source={matabuka}  style={Style.eye}/>
                            </TouchableOpacity>
                        </View>
                    <TouchableOpacity onPress={()=> alert('terimakasih')}>
                        <View style={Style.login2}>
                            <Text style={Style.login}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
            </View>
          
        
    
        </View>
        )
    }
}

const Style = StyleSheet.create({
    eye2:{
        position:'absolute',
        top:26,
        left:270
    },
    eye:{
        width:21,
        height:20,
        
    },

    login2:{
    width:307,
    height:42,
    borderRadius:13,
    backgroundColor:'#82B1CB'
    },
    login:{
        fontSize:24,
        color:'black',
        textAlign:'center',
        marginTop:5
      
    },
    
    text:{
            textAlign:'center',
            fontFamily:'roboto',
            fontSize:40,
            color:'#35338F',
            marginTop:156,
            marginBottom:37
        },

    email:{
        width:307,
        height:42,
        borderWidth:1,
        borderRadius:9
    },

    password:{
        width:307,
        height:42,
        borderWidth:1,
        borderRadius:9,
        marginVertical:15
    },


}
)
export default Home
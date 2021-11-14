import React, {useState}from 'react'
import { View, Text, StyleSheet,TextInput,Switch , TouchableOpacity} from 'react-native'


const HalLogin= ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View >
  

        <View style={{alignItems:'center'}}>
            
        <Text style={Style.text} >P U L A N G</Text>
       
        <TextInput  placeholder="Email" style={Style.email}/>
        <TextInput  placeholder='Password' style={Style.password} secureTextEntry={true}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Home2')}>
        <View style={Style.login2}>
        <Text style={Style.login}>LOGIN</Text>
        </View>
        </TouchableOpacity>
        </View>
      
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </View>
    )
}




const Style = StyleSheet.create({
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

export default HalLogin

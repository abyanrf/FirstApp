import React ,{Component}from "react";
import {View,Text, StyleSheet, Image, TouchableOpacity,StatusBar, ScrollView} from 'react-native'
// import iconhome from "../../assets/icon/iconhome.png";
// import setting from "../../assets/icon/setting.png";
// import iconrumah from '../../assets/icon/iconrumah.png'
// import iconorang from '../../assets/icon/iconorang.png'

class Home2 extends Component{
    render(){
        return(
            <View>
                <View style={{height:60,backgroundColor:'#7C7676',flexDirection:'row',alignItems:'center'}}>
                 <TouchableOpacity style={{position:'absolute',left:10}}>
                    <Image source={require('../../assets/icon/iconhome.png')} />
                 </TouchableOpacity>
                <Text style={{position:'absolute',left:175,fontSize:22,fontWeight:'600',color:'white'}}>HOME</Text>
                <TouchableOpacity style={{position:'absolute',left:355}}>
                    <Image source={require('../../assets/icon/setting.png')} />
                </TouchableOpacity>
                
                 <TouchableOpacity >
                     <Image source={require('../../assets/icon/iconrumah.png')}/>
                 </TouchableOpacity>
                </View>
            </View>
        )
    }
}




export default Home2

import React,{ Component, useState } from "react"
import {Text,View,Image, Button} from 'react-native'
import profile from '../../assets/image/profile.jpg' 
class FlexBox extends Component{
    constructor(props){
        super(props);
         this.state={
             followers:200
         };
        
    }
    render(){
        
        return(
            <View>
                <View  style={{
                flexDirection:'row',
                backgroundColor:'#95a5a6',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <View style={{width:50,height:100,backgroundColor:'#3498db'}}/>
                <View style={{width:50,height:100,backgroundColor:'#9b59b6'}}/>
                <View style={{width:50,height:100,backgroundColor:'#27ae60'}}/>
                <View style={{width:50,height:100,backgroundColor:'#e67e22'}}/>
     
                </View>
               
            <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:15}}>
                <Text>home</Text>
                <Text>about</Text>
                <Text>profile</Text>
                <Text>contact</Text>
         
            </View >
            <View style={{marginVertical:15,alignItems:'center'}}>
                <Image  source={profile} style={{width:100,height:100,borderRadius:50}}/>

            <View style={{marginHorizontal:14}} >
                <Text style={{fontWeight:'bold'}}>Abyan Uzumaki</Text>
                <Text style={{fontSize:14}}>{this.state.followers} followers </Text>

            </View>
            </View>
                
                <Button title='follow'  onPress={()=> this.setState({followers:this.state.followers + 50})}/>
            </View>

        )
       
    }
}


const Tambah =()=>{
  const[number,setNumber] = use
}
export default FlexBox;
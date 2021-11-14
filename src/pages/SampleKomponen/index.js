import React, {Component} from "react";
import {Image, Text, TextInput, View, } from 'react-native';

const SampleKomponen =()=>{
    return (
       
        <View>
        <View style = {{width:80,height:80,backgroundColor:'#9b59b6'}}/>
    <Text style={{color:'#16a085',fontSize:20}}>bijisalak</Text>
    <Text>haii abyan kerenn... </Text>
    <Abyan/>
    <Photo/>
    <TextInput style={{borderWidth:1}}/>
    <Profile/>
    <Box/>
    </View>
        ) 
        

}
const Abyan =()=>{
  return <Text>apakabar?</Text>
}

const Photo =()=> {
    return <Image
    source={{uri:'https://placeimg.com/100/100/nature'}}
    style={{width:100,height:100}}
    />
}

class Box extends Component{ //class component
    render(){
        return <Text>ini class component </Text>
    }
}

class Profile extends Component{
    render(){
        return (

        <View>
        

           <Text style={{color:'#1abc9c'}}>ini poto</Text>

        </View>
        )
    }
}

export default SampleKomponen;
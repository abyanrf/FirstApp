import axios from "axios";
import React, { useState } from "react";
import { View,Text,Button, Image ,TouchableOpacity } from "react-native";
import Axios from "axios";



const CallApiAxios = ({ navigation }) =>{
    const [dataUser,setDataUSer] =useState({
        avatar:'',
        first_name:'',
        last_name:'',
        email:'',
    })
    

    const[dataJob,setDataJob] =useState({
        name:'',
        job:'',
        email:'',
        umur:'',
    })


 const GetData =() =>{

    Axios.get('https://reqres.in/api/users/6')
    .then(result =>{console.log(result) 
        setDataUSer(result.data.data)})
    .catch(err => console.error(err))
 }



  const PostData=()=>{
    const DataApi ={
        name: "Abyan",
        job: "Big Boss",
        email:'abyan@gmail.com',
        umur:20
    }

    
    Axios.post('https://reqres.in/api/users',DataApi)
    .then(result=> {
        console.log(result)
        setDataJob(result.data)
    })
    .catch(err => console.error(err))
  }

 
    return(
        <View style={{margin:10}}>
            <Text style={{textAlign:'center',fontSize:20,marginBottom:10}}>Call Api Axios</Text>
            <Button title='Get data' onPress={GetData}/>
            <Text style={{fontWeight:'bold',marginVertical:10}}>GET DATA</Text>
            {dataUser.avatar.length > 0 && (
                <Image source={{uri:dataUser.avatar}} style={{width:100,height:100,borderRadius:100}}/>

            )}
            <Text>nama : {`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>email : {dataUser.email}</Text>
            <View style={{borderBottomWidth:1,marginVertical:10}}/>
            <Button title='post data' onPress={PostData}/>
            <Text>name : {dataJob.name}</Text>
            <Text>job : {dataJob.job}</Text>
            <Text>email :  {dataJob.email}</Text>
            <Text>umur : {dataJob.umur}</Text>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:100,height:30 ,backgroundColor:'#869fdb',justifyContent:'center',alignItems:'center',borderRadius:10}} 
                onPress={() => navigation.navigate('CallApi')}>
                        <Text style={{fontWeight:'700'}}>Call Api </Text>
                </TouchableOpacity>

            </View>


        </View>
    )
};

export default CallApiAxios;
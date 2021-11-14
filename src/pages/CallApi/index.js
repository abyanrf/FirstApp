import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, Button,Image, TouchableOpacity } from "react-native";


const CallApi = ({ navigation }) =>{
    const [dataUser,setDataUser] = useState({
        avatar:'',
        email:'',
        first_name:'',
        last_name:''
    })

    const[dataJob,setDataJob] = useState({
        email:'',
        name:'',
        job:'',
        umur:''
    })
    useEffect(() =>{

    
        //call api method get
        // fetch('https://reqres.in/api/users?page=2')
        // .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(error => console.error(error))

        //call api method post
        // const DataApi ={
        //     name: "abyan",
        //     job: "leader"
        // }

        // fetch('https://reqres.in/api/users',{
        //     method:'POST',
        //     headers:{ 'Content-Type' : 'application/json'},
        //     body:JSON.stringify(DataApi)
        // })
        // .then(response => response.json())
        // .then(json => { 
        //     console.log(json)})
        // .catch(error => console.error(error))
    },[]);

    const GetData =() =>{
        fetch('https://reqres.in/api/users/10')
        .then(response => response.json())
        .then(json => {console.log(json)
                        setDataUser(json.data)})
        .catch(error => console.error(error))
    }
    const PostData =() => {
        const DataApi ={
            name: "abyan",
            job: "Big Boss",
            email:'abyan@gmail.com',
            umur:20
        }

        fetch('https://reqres.in/api/users',{
            method:'POST',
            headers:{ 'Content-Type' : 'application/json'},
            body:JSON.stringify(DataApi)
        })
        .then(response => response.json())
        .then(json => {console.log(json)
                        setDataJob(json)})
        .catch(error => console.error(error))
    }

    return(
        <View style={Style.kotak}>
            <Text style={Style.text}>Call Api</Text>
            <Button title='GET DATA' onPress={GetData}/>
            <Text>Respon get data</Text>
            {dataUser.avatar.length > 0 && (
                <Image source={{uri:dataUser.avatar}} style={Style.avatar}/>

            )}
            <Text>Name : {`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>Email : {dataUser.email}</Text>

            <View style={{borderBottomWidth:1,margin:10}}/>

            <Button title='Post Data' onPress={PostData} />
            <Text>Nama : {dataJob.name} </Text>
            <Text>Job : {dataJob.job}</Text>
            <Text>Email : {dataJob.email}</Text>
            <Text>Age : {dataJob.umur}</Text>
            
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:100,height:30 ,backgroundColor:'#869fdb',justifyContent:'center',alignItems:'center',borderRadius:10}} 
                onPress={() => navigation.navigate('CallApiAxios')}>
                        <Text style={{fontWeight:'700'}}>Call Api Axios</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};


const Style =StyleSheet.create({
    avatar:{
        width:100,
        height:100,
        borderRadius:100,
        margin:10
    },
    kotak:{
        margin:10
    },
    text:{
        textAlign:'center',
        fontSize:16,
        marginBottom:10
    }
})
export default CallApi;
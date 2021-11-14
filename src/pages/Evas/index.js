import React, { Component } from 'react'
import { View,Image, StyleSheet, TextInput,Text, ScrollView, TouchableOpacity,} from 'react-native';
import search from "../../assets/icon/search.png";
import vector2 from "../../assets/icon/Vector2.png";
import duduk from "../../assets/image/duduk.png";
// import bulat from '../../assets/image/bulat.png';
import no1 from '../../assets/image/no1.png';
import no2 from '../../assets/image/no2.png'
const Scroll=(props)=>{
    return(
        <View>
            <View style={{width:146,height:107,backgroundColor:'#ECC2B9',borderRadius:18,marginHorizontal:10}}>
                        <Image source={props.foto} style={{marginTop:12}} />
                    </View>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:12}}> {props.tugas} </Text>
                        <Text style={{fontSize:11,fontWeight:'600',marginLeft:19,color:'grey'}}>{props.total}</Text>
        </View>
    )
}

class Evas extends Component {
    render(
        ){
        console.log('helooo');
        return(

          
            
            <View style={Evas1.background}> 
            
            

                <View>
                     <TextInput placeholder=' Search Freelancers, Project'  style={Evas1.search}></TextInput>
                     <Image source={search} style={Evas1.iconse}/>
                </View>

                <TouchableOpacity style={{width:42,
        height:42,
        borderRadius:42/2,
        backgroundColor:'rgba(241, 242, 246,1.0)',
        opacity:0.5,
        position:'absolute',
        left:330,
        top:42}} >
                
                <Image source={vector2} style={{position:'absolute',top:15,left:10}}/>
            
        </TouchableOpacity>
     

                 <View style={{width:168,height:86,position:'absolute',top:130,left:20}}>
                     <Text style={Evas1.cari}>Cari Freelancer</Text>
                 </View>
                 
                 <View style={{width:128,height:51,position:'absolute',top:224,left:21}}>
                     <Text style={Evas1.selesai}>Selesaikan Perkerjaan dengan telenta terbaik di bidangnya</Text>
                 </View>

                

                 <Image source={duduk} style={{position:'absolute',top:22,left:101,}}/>

                 {/* <Image source={bulat} style={{position:'absolute',top:226,left:-34,tintColor:'#AF4A53'}}/> */}

         <View style={{backgroundColor:'#eee',width:412,height:441,borderRadius:30,position:'absolute',top:371}}/>
                
                <Text style={Evas1.paling} >Paling Banyak Dicari</Text>
                    
                  <View style={{flexDirection:'row',position:'absolute',top:450}}>

                  <ScrollView horizontal>
          
          <View style={{flexDirection:'row'}}>
              <Scroll foto={no1} tugas='Programmer' total='120 Progammer'/>
    
              <Scroll foto={no2} tugas='UI/UX Designer' total='340 Designer'/>
    
              <Scroll foto={no1} tugas='Kacung' total='130 Kacung'/>
          </View>
          </ScrollView>
               
                <Text style={Evas1.top}>Top Freelancer </Text>
                 
                <Text style={{fontSize:20,
        fontWeight:'bold',
        position:'absolute',
        top:180,
        left:20}}>Top Freelancer </Text>
                <Text style={{fontSize:20,
        fontWeight:'bold',
        position:'absolute',
        top:200,
        left:20}}>Top Freelancer </Text>
                <Text style={{fontSize:20,
        fontWeight:'bold',
        position:'absolute',
        top:220,
        left:20}}>Top Freelancer </Text>

                  </View>
                    
                 
            </View>
        )
    }
}





const Evas1 = StyleSheet.create({
    top:{
        fontSize:20,
        fontWeight:'bold',
        position:'absolute',
        top:150,
        left:20
    },

    paling:{
        fontSize:20,
        fontWeight:'700',
        position:'absolute',
        top:395,
        left:25,
        
        
    },
    selesai:{
        fontSize:14,
        color:'rgba(255, 255, 255, 0.6)',
    },
    cari:{
        fontSize:36,
        fontWeight:'bold',
        color:'#eee'
    },


    vector:{
        width:42,
        height:42,
        borderRadius:42/2,
        backgroundColor:'rgba(241, 242, 246,1.0)',
        opacity:0.5,
        position:'absolute',
        left:330,
        top:42

    },
    iconse:{
        position:'absolute',
        top:54,
        left:43,

    },
    search:{
        width:277,
        height:42,
        borderRadius:35,
        paddingLeft:30,
        position:'absolute',
        top:42,
        left:35,
        backgroundColor:'#ecf0f1',
        opacity:0.5 
    },

    background:{
        backgroundColor:'#AF4A53',
        flex:1
    }
})


export default Evas;

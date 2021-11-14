import React,{Component} from "react";
import {View,Text, ScrollView,Image, TouchableOpacity} from 'react-native';

class Chatty extends Component{
    render(){
        return(
          <View style={{flex:1,backgroundColor:'#1B8FFB'}}>
              <ScrollView >
                  <View style={{height:260,justifyContent:'center',alignItems:'center'}}>
                      <View style={{alignItems:'center'}}>

                        <View style={{width:130,height:130,borderWidth:2,borderStyle:'dashed',borderColor:'#9ED0FF',borderRadius:130/2,justifyContent:'center',alignItems:'center'}}>
                          <Image source={require('../../assets/image/profile.jpg')} style={{width:100,height:100,borderRadius:50}}/>
                        </View>

                        <Text style={{color:'#eee',fontSize:23,marginTop:15}}>Abyan Rafi</Text>
                        <Text style={{fontSize:16,opacity:0.5,color:'white'}}>Programmer</Text>

                      </View>

                  </View>
                  <View style={{height:560,width:412,backgroundColor:'white',borderTopRightRadius:35,borderTopLeftRadius:35}}>
                      <View>
                          <Text style={{fontSize:22,color:'black',position:'relative',top:30,left:30}}>Friends</Text>
                          
                          <TouchableOpacity style={{flexDirection:'row',position:'relative',top:50,left:30}}>
                            <Image source={require('../../assets/image/face.jpg')} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{marginLeft:10}}>
                              <Text style={{color:'black',fontSize:20}}>Uzumaki</Text>
                              <Text style={{color:'black',opacity:0.5,fontSize:16}}>haiii abyan</Text>
                              <Text style={{position:'absolute',left:250,top:20,fontSize:16}}>Now</Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',position:'relative',top:50,left:30,marginVertical:20}}>
                            <Image source={require('../../assets/image/bike.jpg')} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{marginLeft:10}}>
                              <Text style={{color:'black',fontSize:20}}>Supra</Text>
                              <Text style={{color:'black',opacity:0.5,fontSize:16}}>kuyy lahh sini</Text>
                              <Text style={{position:'absolute',left:250,top:20,fontSize:16}}>12.50</Text>
                            </View>
                          </TouchableOpacity>

                      </View>

                      <View>
                          <Text style={{fontSize:22,color:'black',position:'relative',top:70,left:30}}>Groups</Text>
                          <TouchableOpacity style={{flexDirection:'row',position:'relative',top:70,left:30,marginVertical:20}}>
                            <Image source={require('../../assets/image/icon.png')} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{marginLeft:10}}>
                              <Text style={{color:'black',fontSize:20}}>Jababeka</Text>
                              <Text style={{color:'black',opacity:0.5,fontSize:16}}>ngopi lahh sini</Text>
                              <Text style={{position:'absolute',left:250,top:20,fontSize:16}}>11.25</Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',position:'relative',top:50,left:30,marginVertical:20}}>
                            <Image source={require('../../assets/image/nature.jpg')} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{marginLeft:10}}>
                              <Text style={{color:'black',fontSize:20}}>Sak dulur</Text>
                              <Text style={{color:'black',opacity:0.5,fontSize:16}}>metu o rek</Text>
                              <Text style={{position:'absolute',left:250,top:20,fontSize:16}}>07.02</Text>
                            </View>
                          </TouchableOpacity>


                          <TouchableOpacity style={{flexDirection:'row',position:'relative',top:30,left:30,marginVertical:20}}>
                            <Image source={require('../../assets/image/golf.jpg')} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{marginLeft:10}}>
                              <Text style={{color:'black',fontSize:20}}>Golf bsd</Text>
                              <Text style={{color:'black',opacity:0.5,fontSize:16}}>kapan main lagi nih</Text>
                              <Text style={{position:'absolute',left:250,top:20,fontSize:16}}>07.02</Text>
                            </View>
                          </TouchableOpacity>
                      </View>
                  </View>
              </ScrollView>

              <View style={{height:80,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity style={{width:55,height:55,backgroundColor:'#29CB9E',borderRadius:55/2,justifyContent:'center',alignItems:'center'}}>
                      <Image source={require('../../assets/icon/plus.png')} style={{width:35}} />
                  </TouchableOpacity>
              </View>
          </View>
        )
    }
}

export default Chatty
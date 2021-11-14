import React,{Component} from 'react';
import {view,Text,ScrollView, View, TouchableOpacity,StyleSheet, Image, TextInput} from 'react-native'
import  Category from '../../assets/icon/Category.png'
import bike from '../../assets/image/bike.jpg'


class Toko extends Component{
render(){
    return(
        <View style={{flex:1}} >
          <ScrollView style={{flex:1,backgroundColor:'#DFDFEE'}}>

              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:17,marginTop:15}}>

                <View style={{width:35,minHeight:35}}>
                  <TouchableOpacity>
                    <Image source={require('../../assets/icon/category.png')} style={{width:35,height:35}}/>
                  </TouchableOpacity>
                </View>

                <View style={{width:35,minHeight:35}}>
                  <TouchableOpacity>
                    <Image source={require('../../assets/icon/notification.png')} style={{width:32,height:32}}/>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={{marginVertical:24,marginLeft:20}}>
                   <Text style={{fontSize:24,fontWeight:'600',color:'black'}}>Perfect Shoes</Text>
                   <Text style={{fontSize:16,fontStyle:'italic',color:'black'}}>For perfect style</Text>
              </View>

              <View style={{marginHorizontal:17,flexDirection:'row'}}>
                   <View>
                      <TextInput placeholder='seacrh for shoes' style={{height:48,width:300,marginRight:20,backgroundColor:'white',borderRadius:15,paddingHorizontal:29}}/>
                      <Image source={require('../../assets/icon/search.png')} style={{position:'absolute',top:15,left:8}}/>       
                   </View>

                    <TouchableOpacity style={{width:48,height:48,backgroundColor:'#FF8848',justifyContent:'center',alignItems:'center',borderRadius:15}}>
                     <Image source={require('../../assets/icon/edit.png')} style={{width:30,height:30,}}/>
                    </TouchableOpacity>
              </View>


              <View style={{marginVertical:24,marginHorizontal:37,flexDirection:'row'}}>

                <TouchableOpacity style={{width:58,height:28,backgroundColor:'#FF8848',justifyContent:'center',alignItems:'center',marginRight:16,borderRadius:9}}>
                  <Text style={{fontSize:16}}>Nike</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{width:60,height:28,backgroundColor:'#eee',justifyContent:'center',alignItems:'center',marginRight:20,borderRadius:9}}>
                  <Text style={{fontSize:16}}>Adidas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:58,height:28,backgroundColor:'#eee',justifyContent:'center',alignItems:'center',marginRight:20,borderRadius:9}}>
                  <Text style={{fontSize:16}}>Puma</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:103,height:28,backgroundColor:'#eee',justifyContent:'center',alignItems:'center',borderRadius:9}}>
                  <Text style={{fontSize:16}}>New Balance</Text>
                </TouchableOpacity>
              </View>


              <View>
                <Isi merk='Nike' harga='Idr 1000k'/>
                <Isi/>
                <Isi/>
                <Isi/>
                <Isi/>
                <Isi/>
                <Isi/>
              </View>
          </ScrollView>


          <View style={{height:65,backgroundColor:'#eee',flexDirection:'row',alignItems:'center'}}>
           
            <TouchableOpacity  style={{marginLeft:30,marginRight:75}}>
              <Image source={require('../../assets/icon/home1.png')} style={{width:30}}/>
            </TouchableOpacity>

            <TouchableOpacity  style={{marginRight:75}}>
              <Image source={require('../../assets/icon/cart.png')} style={{width:30}}/>
            </TouchableOpacity>

            <TouchableOpacity  style={{marginRight:75}}>
              <Image source={require('../../assets/icon/diskon.png')} style={{width:30}}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require('../../assets/icon/profile.png')} style={{width:30}}/>
            </TouchableOpacity>

          </View>



        </View>
    )
  }
}


const Isi =(props)=>{
  return(
    <View style={{flexDirection:'row',marginHorizontal:26,marginVertical:17}}>

      <View style={{width:170,height:190,alignItems:'center',backgroundColor:'#eee',marginRight:20,borderRadius:16}}>
        <Image source={props.sepatu}/>
        <Text style={{fontSize:14,fontWeight:'800'}}>{props.merk}</Text>
        <Text style={{color:'#C2C4CC'}}>{props.harga}</Text>
      </View>

      <View style={{width:170,height:190,alignItems:'center',backgroundColor:'#eee',borderRadius:16}}>
        <Image source={props.sepatu}/>
        <Text style={{fontSize:14,fontWeight:'800'}}>{props.merk}</Text>
        <Text style={{color:'#C2C4CC'}}>{props.harga}</Text>
      </View>

      

    
      
    </View>
  )
}




const Hias = StyleSheet.create({
    notification:{
        
        
      

    },

    category:{
       position:'absolute',
       top:24,
       left:15
    },

   
})

export default Toko
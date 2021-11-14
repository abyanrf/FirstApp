import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'


const Story = (props) =>{
    return(
        <View>
        <Image source={props.gambar} style={{width:60,height:60,borderRadius:600/2,marginRight:15}} />
        <Text style={{textAlign:"center"}}>{props.judul} </Text>
        </View>
    )
}


const PropsDimanis = () => {
    return (
        <View>
            <Text style={{marginVertical:14,fontWeight:'bold'}}>STORY</Text>

            <ScrollView horizontal>
        <View style={{alignItems:'center',flexDirection:'row'}}> 

         <Story gambar={{uri:'https://placeimg.com/640/480/animals'}} judul='story1' />
         <Story gambar={{uri:'https://placeimg.com/640/480/arch'}} judul='story 2'/>
         <Story gambar={{uri:'https://placeimg.com/640/480/nature'}} judul='story 3'/>
         <Story gambar={{uri:'https://placeimg.com/640/480/tech/sepia'}} judul='story 4'/>
         <Story gambar={{uri:'https://placeimg.com/640/480/tech'}}  judul='story 5'/>
         <Story gambar={{uri:'https://placeimg.com/640/480/tech/grayscale'}}  judul='story 6'/>
         <Story gambar={{uri:'https://placeimg.com/640/480/tech/sepia'}}  judul='story 7' />
         <Story gambar={{uri:'https://placeimg.com/640/480/arch/grayscale'}}  judul='story 8' />
         <Story gambar={{uri:'https://placeimg.com/640/480/people/sepia'}}  judul='story 9' />
         <Story gambar={{uri:'https://placeimg.com/640/480/nature/sepia'}}  judul='story 10' />
         </View>
            </ScrollView>



            
        </View>
    )
}

export default PropsDimanis

const styles = StyleSheet.create({})

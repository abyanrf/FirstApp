import React, {Component, useState} from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'




const Tambah=()=>{
    const [number,setNumber] = useState(0);
    return(
        <View>
            <Text>{number}</Text>
            <Button  title='tambah' onPress={()=> setNumber(number + 2)}/>
            <Text> </Text>
            <Button title='kurang' onPress={()=> setNumber(number -1)}/>
        </View>
        
    )
}

class Tambah2 extends Component{
    state={
        number:0,
    };
    render(){
        return(
            <View>
               <Text>{this.state.number}</Text>
                <Button title='tambah' onPress={()=> this.setState({number: this.state.number + 2})}/>
                <Text></Text>
                <Button title='kurang' onPress={()=> this.setState({number: this.state.number -1})}/>
                

            </View>
        )
    }
}




const State = () => {
    return (
        <View > 
            <Text style={Style.text}>State Dinamis</Text>


            <Text>funtion</Text>
            <Tambah/>


            <Text style={{marginTop:10}}>class</Text>

           <Tambah2/>
        </View>
    )
}


const Style = StyleSheet.create({
    text:{
    fontSize:20,
    marginBottom:10,
    textAlign:'center'
    
    },
    wrapper:{
        alignItems:'center'
    }
})
export default State

const styles = StyleSheet.create({})

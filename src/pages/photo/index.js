import React, {useState} from 'react'
import { Image, ScrollView, StyleSheet, Text, View ,Switch} from 'react-native'


const Photo = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View>
            <ScrollView>

            <Text style={Style.text}>Abyan keren</Text>
           <Baris1/>
           <Baris2/>
           <Baris3/>
           <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        
            </ScrollView>
        </View>
    )
}



const Feed1 =(props)=>{
    return(
        <View>
            <Image source={props.gambar} style={{width:140,height:120,marginHorizontal:2}}/>
        </View>
    )
}

const Baris1 =()=>{
    return(
        <View style={{flexDirection:'row',marginTop:5}}>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/animals'}}/>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/arch/grayscale'}}/>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/animals/sepia'}}/>
        
        </View>
    )
}

const Baris2 =()=>{
    return(
        <View style={{flexDirection:'row',marginTop:5}}>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/tech/grayscale'}}/>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/people/sepia'}}/>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/arch/sepia'}}/>
        
        </View>
    )
}

const Baris3 =()=>{
    return(
        <View style={{flexDirection:'row',marginTop:5}}>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/animals/grayscale'}}/>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/arch/sepia'}}/>
        <Feed1 gambar={{uri:'https://placeimg.com/640/480/nature/sepia'}}/>
        
        </View>
    )
}





const Style = StyleSheet.create({
    text:{    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#bdc3c7",
    color: "#ecf0f1",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"}
})
export default Photo

const styles = StyleSheet.create({})

import React,{Component} from "react";
import { View,Text } from "react-native";


class Test  extends Component{
    constructor(props){
        super(props);
        console.log('==> cunstructor');
    }

    componentDidMount(){
        console.log('==> did mount ');
    }


    render(){
        console.log('==> render');
        return(
            <View>
                <Text>haiiiii</Text>
            </View>
        )
    }
} 

export default Test
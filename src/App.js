
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplaceScreen from './pages/SplaceScreen';

import HalLogin from './pages/HalLogin';
import SignUp from './pages/SignUp';
import CallApi from './pages/CallApi';
 import CallApiAxios from './pages/CallApiAxios';
import Animasi from './pages/Animasi';
import Home2 from './pages/home2';
import CRUD from './pages/CRUD';
const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <CRUD/>
 
  );
}

export default App;

{/* <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="SplaceScreen" component={SplaceScreen} options={{headerShown:false}} />
    <Stack.Screen name="HalLogin" component={Home} options={{headerShown:false}} />
    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
 */}


//  <NavigationContainer>
//       <Stack.Navigator 
//       initialRouteName='SignUp'
//       screenOptions={{headerShown:false}}>

//       <Stack.Screen name="Animasi" component={Animasi}  />
//       <Stack.Screen name="SplaceScreen" component={SplaceScreen}  />
//       <Stack.Screen name="HalLogin" component={HalLogin}  />
//       <Stack.Screen name="SignUp" component={SignUp}  />
//       <Stack.Screen name="Home2" component={Home2}  />

      
    
//       </Stack.Navigator>
//     </NavigationContainer>
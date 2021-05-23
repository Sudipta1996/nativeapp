import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './LoginScreen'
import RegisterScreen from'./RegisterScreen'
import PatientScreen from'./PatientScreen'
import PatientList from './PatientList'
import HomeScreen from './HomeScreen'
import Addvital from './Addvital'
import LandingScreen from './LandingScreen'
import PatientLogin from './PatientLogin'
import Delete from './Delete'
import Dropdown from './Dropdown'
import Create from './Create'
import ViewVitals from './ViewVitals'

// const Tab = createMaterialTopTabNavigator();
// function SecondComponent() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Add Patient" component={HomeScreen} />
//       <Tab.Screen name="PatientList" component={Wellcom} />
//     </Tab.Navigator>
//   );
// }
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Select User" component={Dropdown}/> 
         <Stack.Screen name="PLogin" component={PatientLogin}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="AddPatient" component={PatientScreen} />
        <Stack.Screen name="create" component={Create} />
      <Stack.Screen name="PatientList" component={PatientList} />
       <Stack.Screen name="Addvital" component={Addvital} />
       <Stack.Screen name="delete" component={Delete} />
       <Stack.Screen name="vtallist" component={ViewVitals} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

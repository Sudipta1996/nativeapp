import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
function LandingScreen({navigation}) {
 

useEffect(()=>{
  // console.log("set",open,value)
})
  const submit =()=>{
    console.log("set")
  }
  return (
       <View style={{ flex: 1,  justifyContent: 'center' }}>
   
    <View style={styles.container}>
    <Text style={styles.header}>Select User</Text>
    <View style={styles.header} >
    <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Login')}
          style={styles.button} 
          >
              <Text style={styles.btntext}>Doctor Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => navigation.navigate('PLogin')}
          style={styles.button} 
         
          >
              <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
    </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({

container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#36485f',
    paddingLeft:60,
    paddingRight:60,
  },
  header:{
    fontSize:24,
    color:'#fff',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
    
  },
  button:{
      alignSelf:'stretch',
      alignItems:'center',
      padding:15,
      backgroundColor:'#59cbbd',
     marginTop:20
  },

})
export default LandingScreen
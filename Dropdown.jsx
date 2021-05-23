import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import logo from "./dropdown.png";
const Dropdown=({navigation})=>{
  

  return(
    <View style={{ flex: 1,  justifyContent: 'center' }}>
    <View style={styles.container}>
    <View style={styles.containers}>
    
    <Image
        style={styles.stretch}
        source={logo}
      />
      </View>
      <Text style={styles.header} >Select User</Text>
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
              <Text style={styles.btntext}>Patient Login</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
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
  btntext:{
    color:'#fff',
    fontWeight:'bold',

  },
  containers: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:40
  },
  stretch: {
    width: 100,
    height: 100,
   
  },


})
export default Dropdown;
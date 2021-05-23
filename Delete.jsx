import React,{useState,useEffect} from "react"
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import { Button, View,StyleSheet,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const Delete=({navigation,route})=>{
  const[state,setState]=useState({
            id:"",
            name:"",
            
        })
  
  
   console.log(route.params.patientno)
    const confirm=()=>{
      console.log("this is confirm function")
      axios.delete(`http://192.168.43.59:4000/patient/${route.params.patientno}`)
      console.log(route.params.patientno)
    }
    return(
      <>        <View style={{ flex: 1,  justifyContent: 'center' }}>
                <View style={styles.container} >
                <Text style={styles.header}>Are you Confirm to Delete</Text>
                <Button onPress={confirm}  title="Submit"style={styles.button}></Button>
               
               </View>
          </View>
          
          </>
    )
}
const styles = StyleSheet.create({
   button:{
      
      alignItems:'center',
      padding:15,
      backgroundColor:'#59cbbd',
     marginTop:20
  },
  header:{
    fontSize:24,
    color:'#fff',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
    
  },
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#36485f',
    paddingLeft:60,
    paddingRight:60,
  },
})
export default Delete;
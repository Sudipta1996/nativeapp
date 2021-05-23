import React,{useState,useEffect} from "react"
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import { Button, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const PatientList=({navigation})=>{
  
  const[state,setState]=useState({
      patient:[]
  })
  useEffect(()=>{
      axios.get("http://192.168.43.59:4000/patient/").then(res=>{
          setState({
              ...state,
              patient:res.data
          })
      })
  })
  
    // const confirm=()=>{
    //   axios.delete(`http://localhost:4000/patient/${state.patientno}`)
    // }
    return(
      <>
              <View style={{ flex: 1,  justifyContent: 'center' }}>
        
               <View  style={styles.container}>
                
               <table>
                <thead>
                  <tr>
                    <th scope="col">Patient no</th>
                    <th scope="col">Patient Name</th>
                    
                    
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {state.patient.map(data=>
            <tr>
            <th scope="row">{data.patientno}</th>
            <td>{data.name}</td>
            <td>
               <Button title="Addvital"onPress={() => navigation.navigate('Addvital',{patientno:data.patientno})} style={styles.button}/>
                <Button title="delete" onPress={() => navigation.navigate('delete',{patientno:data.patientno})}style={styles.button} />  
            </td>
            
          </tr>
    )}
                </tbody>
              </table>
               </View>
          </View>
          
          </>
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
   button:{
      alignSelf:'stretch',
      alignItems:'center',
      padding:15,
      backgroundColor:'#59cbbd',
     marginTop:20
  }
})
export default PatientList;
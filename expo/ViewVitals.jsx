import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { View, StyleSheet,Button, ScrollView,Text } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function VitalList({route,navigation}) {
    const[state,setState]=useState({
        patient:[]
    })
    const [state1, setState1] = useState({
    name: ""
  })
  // useEffect(() => {
  //   axios.get(`http://localhost:4000/doctor/${props.regno}`).then(res => {
  //     console.log("name is", res.data.name)
  //     setState1({
  //       ...state1,
  //       name: res.data.name,
  //     })
  //   })
    useEffect(()=>{
        axios.get(  `http://192.168.43.59:4000/patient/${route.params.patientno}`).then(res=>{
            
           console.log(route.params.patientno)
            setState({
                ...state,
                patient:res.data.detail
            })
        })
    },[])
    
  return (
    <ScrollView>
    <View style={styles.container}>
        <Text>Name:{route.params.name}</Text>
        <Text>Patient no:{route.params.patientno}</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>O2 level</DataTable.Title>
          <DataTable.Title >Bp</DataTable.Title>
          <DataTable.Title >temp</DataTable.Title>
          <DataTable.Title >remark</DataTable.Title>
        </DataTable.Header>

       {state.patient.map(data=>
             <DataTable.Row>
             <DataTable.Cell>{data.date}</DataTable.Cell>
             <DataTable.Cell>{data.ol}</DataTable.Cell>
             <DataTable.Cell >{data.bp}</DataTable.Cell>
             <DataTable.Cell >{data.temp}</DataTable.Cell> 
             <DataTable.Cell >{data.remark}</DataTable.Cell>
            
           </DataTable.Row>
        )}

      

      </DataTable>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingTop: 20,
    paddingHorizontal: 30,
  },
});
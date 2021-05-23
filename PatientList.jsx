import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Button, View, StyleSheet,Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
const PatientList = ({ navigation }) => {

  const [state, setState] = useState({
    patient: []
  })
  useEffect(() => {
    axios.get("http://192.168.0.105:4000/patient").then(res => {
      setState({
        ...state,
        patient: res.data
      })
    })
  })

  // const confirm=()=>{
  //   axios.delete(`http://localhost:4000/patient/${state.patientno}`)
  // }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <View style={styles.container}>

        <Text style={styles.header}>All Patients</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Patient Name</DataTable.Title>
            <DataTable.Title numeric>Patient No</DataTable.Title>
            <DataTable.Title numeric>Vital</DataTable.Title>
            <DataTable.Title numeric>Delete</DataTable.Title>
          </DataTable.Header>

          {state.patient.map(data => {
            return (
              <DataTable.Row>
                <DataTable.Cell>{data.name}</DataTable.Cell>
                <DataTable.Cell numeric>{data.patientno}</DataTable.Cell>
                <DataTable.Cell numeric><Button title="Add" onPress={() => navigation.navigate('Addvital', { patientno: data.patientno })} style={styles.button} /></DataTable.Cell>
                <DataTable.Cell numeric><Button title="delete" onPress={() => navigation.navigate('delete', { patientno: data.patientno })} style={styles.button} /></DataTable.Cell>
                </DataTable.Row>
            )
          })}
        </DataTable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    color: 'black',
    marginBottom: 40,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#59cbbd',
    marginTop: 20
  }
})
export default PatientList;
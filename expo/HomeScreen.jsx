import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({navigation}) {
  console.log(navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <View style={styles.container}>
      <Text style={styles.header}>Wellcome To Home</Text>
      <Button title="Add Patient" onPress={() => navigation.navigate('AddPatient')} />
      <Button title="List patient" onPress={() => navigation.navigate('PatientList')} />
       
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
})
export default HomeScreen
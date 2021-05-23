
import React,{useState,useEffect} from "react";
import { Text, View ,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from "react-native-picker-select";
import axios from 'axios'
function PatientScreen({navigation}) {
  
   const[state,setState]=useState({
        name:"",
        patientno:"",
        disease:"",
        regno:"",
        detail:[],
        gender:"",
        age:""
    })

  
  const onChangeText = (key, val) => {
    setState({
      ...state,
      [key]:val
    })
   
  }
  const submit=(e)=>{
      console.log(state)
      if(state.name  && state.patientno && state.disease && state.regno  && state.gender && state.age)
      {
        axios.post("http://192.168.43.59:4000/patient",{
          name:state.name,
          patientno:state.patientno,
          disease:state.disease,
          regno:state.regno,
          detail:state.detail,
          gender:state.gender,
          age:state.age
      })
      // alert("successfully data inserted")
      navigation.navigate('create') 
      }
      else
      {
         if(!state.name)
         {
           alert("Please enter the name")
         }
         
         else if(!state.patientno)
         {
           alert("Please enter the patient no")
         }
         else if(!state.disease)
         {
           alert("Please enter the disease")
         }
         else if(!state.regno)
         {
           alert("Please select the doctor")
         }
         else if(!state.gender)
         {
           alert("Please select the gender")
         }
         else if(!state.age)
         {
           alert("Please enter the age")
         }
      }
        
       
  }
  return (
    <View style={{ flex: 1,  justifyContent: 'center' }}>
   
    <View style={styles.container}>
    <View style ={styles.regforms}>
    
          <Text style={styles.header}>Add Patient</Text>
          <TextInput style={styles.textinput} placeholder="Your Name"
            onChangeText={val =>onChangeText('name', val)}
          underlineColorAndroid={'transparent'}
          />
         
          <TextInput style={styles.textinput} placeholder="Age"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('age', val)}
          />
          <TextInput style={styles.textinput} placeholder="Patient No"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('patientno', val)}
          />
          <TextInput style={styles.textinput} placeholder="Diease"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('disease', val)}
          />
          <TextInput style={styles.textinput} placeholder="Regno"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('regno', val)}
          />
          <TextInput style={styles.textinput} placeholder="Gender"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('gender', val)}
          />
           
          <TouchableOpacity style={styles.button}
           onPress={submit}
          >
              <Text style={styles.btntext}>Submit</Text>
          </TouchableOpacity>
      </View>
     
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  regform:{
    alignSelf:'stretch'
  },
  header:{
    fontSize:24,
    color:'#fff',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
    
  },
  textinput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:10,
    color:'#fff',
    borderBottomColor:'#f8f8f8',
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
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#36485f',
    paddingLeft:60,
    paddingRight:60,
  },

})
export default PatientScreen
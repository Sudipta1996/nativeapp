
import React,{useState,useEffect} from "react";
import { Text, View ,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from "react-native-picker-select";
import axios from 'axios'
function Create({navigation}) {

const[state1,setState1]=useState({
        email:[]
      })
    useEffect(()=>{
      axios.get("http://192.168.43.59:4000/user").then(res=>{
       
        const emails=res.data.map(data=>({
          "email":data.email
        }))
        setState1({
          ...state1,
          email:emails
        })
      
      })
    },[])
  const[state,setState]=useState({
            email:"",
            patientno:"",
            password:"",
        })

  const onChangeText = (key, val) => {
    setState({
      ...state,
      [key]:val
    })
   
  }
   const submit=()=>{
          const data=state1.email.find(data=> data.email==state.email)
         if(typeof data =='undefined')
         {
          if(state.email && state.patientno && state.password)
          {
            axios.post("http://192.168.43.59:4000/user",{
              patientno:state.patientno,
              email:state.email,
              password:state.password,
             //location:window.location.origin
            })
            navigation.navigate('AddPatient') 
          }
          else
          {
            if(!state.patientno)
            {
                alert("Please enter the registration no.")
            }
            else if(!state.email)
            {
              alert("Please enter the email")
            }
            else if(!state.password)
            {
              alert("Please enter the password")
            }
          }
         }
         else {
           alert("This email is already existed")
         }
           

          
        }
  return (
    <View style={{ flex: 1,  justifyContent: 'center' }}>
   
    <View style={styles.container}>
    <View style ={styles.regforms}>
    
          
          <TextInput style={styles.textinput} placeholder="Patient No"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('patientno', val)}
          />
          <TextInput style={styles.textinput} placeholder="Email"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('email', val)}
          />
          <TextInput style={styles.textinput} placeholder="Password"
          underlineColorAndroid={'transparent'}
           onChangeText={val =>onChangeText('password', val)}
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
export default Create
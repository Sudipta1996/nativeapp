
import { Button, View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import React,{useState,useEffect} from "react";
import axios from "axios";
function RegisterScreen({navigation}) {
    const[state,setState]=useState({
        name:"",
        docid:"",
        regno:"",
        email:"",
        password:"",
        mob:"",
    })
    const[state1,setState1]=useState({
    doctor:[]
  })
 useEffect(()=>{
    axios.get("http://192.168.43.59/doctor").then(res=>{
      const doctors=res.data.map(data=>({
        "regno":data.regno
      }))
      setState1({
        ...state1,
        doctor:doctors
      })
    })
 })
    const onChangeText = (key, val) => {
    setState({
      ...state,
      [key]:val
    })
   
  }
    const submit=()=>{
      const data=state1.doctor.find(data=> data.regno==state.regno)
      if(typeof data == 'undefined')
      {
        if(state.name && state.docid && state.regno && state.email && state.password && state.mob)
        {
      console.log("this is", state)
      
         axios.post("http://192.168.43.59:4000/doctor",{
           name:state.name,
           docid:state.docid,
           regno:state.regno,
           email:state.email,
           password:state.password,
           mob:state.mob
       })
      
        }
        else
        {
          
          if(!state.name)
          {
            alert("Please enter name")
          }
          else if(!state.docid)
          {
            alert("Please enter docid")
          }
          else if(!state.regno)
          {
            alert("Please enter registration no")
          }
          else if(!state.email)
          {
            alert("Please enter the email")
          }
          else if(!state.password)
          {
            alert("Please enter the password")
          }

          else if(!state.mob)
          {
            alert("Please enter the mob no")
          }
        }
      }
      else{
        alert("Please enter new Doctors ID")
      }
        
    
    }

  return (
    <View style={{ flex: 1,  justifyContent: 'center' }}>
   
    <View style={styles.container}>
    <View style ={styles.regforms}>
    
          <Text style={styles.header}>Registration</Text>
          <TextInput style={styles.textinput} placeholder="Your Name"
           onChangeText={val =>onChangeText('name', val)}
          underlineColorAndroid={'transparent'}
          />
         
          <TextInput style={styles.textinput} placeholder="Doctor id"
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('docid', val)}
          />
          <TextInput style={styles.textinput} placeholder="Reg No"
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('regno', val)}
          />
          <TextInput style={styles.textinput} placeholder="E-mail"
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('email', val)}
          />
          <TextInput style={styles.textinput} placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('password', val)}
          />
          <TextInput style={styles.textinput} placeholder="Mob No"
         
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('mob', val)}
          />
          <TouchableOpacity style={styles.button}
           onPress={submit}
          >
              <Text style={styles.btntext}>Sign Up</Text>
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
export default RegisterScreen;
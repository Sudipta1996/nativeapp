
import React,{useState,useEffect} from "react";
import axios from "axios";
import { Button, View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function LoginScreen({navigation}) {
  const[state,setState]=useState({
    email:"",
    password:"",
});
 
const onChangeText = (key, val) => {
    setState({
      ...state,
      [key]:val
    })
   
  }
// const change=(e)=>{
//   e.preventDefault();
//   const{name,value}=e.target;
//   setState({
//       ...state,
//       [name]:value
//   })
  
// }
 
const submit=()=>{
       
        axios.get("http://192.168.43.59:4000/doctor").then(res=>{
           
            // users=res.data
           
           //history.push("/home"); 
           console.log(res.data)
        let e=true 
      
      if(state.email && state.password)
      {
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].email==state.email)
          {
            
            if(res.data[i].password==state.password)
            {
              console.log(res.data[i].email,res.data[i].password,state.email,state.password)
              e=false
                  
            //  alert("Sucessfully")
              navigation.navigate('home') 
            }

          }
        }
       if(e==true )
       {
         alert("Invalid email or password")
         
       }
      }
      else{
       if(state.email)
       {
         alert("please enter the password")
       }
       else{
         alert("please enter the email")
       }
      }  

     })
     
    
  }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    
    
    <View style={styles.container}>
    <View style ={styles.regforms}>
    
          <Text style={styles.header}>DoctorLogin</Text>
          
          <TextInput style={styles.textinput} placeholder="E-mail"
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('email', val)}
          />
          <TextInput style={styles.textinput} placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('password', val)}
          />
          <TouchableOpacity style={styles.button}
          onPress={submit}
          >
              <Text style={styles.btntext}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => navigation.navigate('Register')}
          style={styles.button} 
         
          >
              <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
      </View>
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}
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
    marginBottom:30,
    color:'#fff',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1,

  },
  button:{
      alignSelf:'stretch',
      alignItems:'center',
      padding:20,
      backgroundColor:'#59cbbd',
     marginTop:30
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
export default LoginScreen;
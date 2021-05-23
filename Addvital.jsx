
import { Button, View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import React,{useState,useEffect} from "react";
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
function Addvital({navigation,route}) {
  

useEffect(()=>{
    axios.get(`http://192.168.43.59:4000/patient/${route.params.patientno}`).then(res=>{
      console.log(res.data)
      const detail1=res.data.detail.map(data=>({
        "date":data.date,
        "ol":data.ol,
        "bp":data.bp,
        "temp":data.temp,
        "remark":data.remark
      }))
      setState({
            ...state,
            detail:detail1,
         
            name: res.data.name,
            patientno:res.data.patientno,
            disease:res.data.disease,
            regno:res.data.regno,
            gender:res.data.gender,
            age:res.data.age

      })
      
    })
                    
    
    
  },[])

  







   
   const[state,setState]=useState({
        vital:{
           date:"",
          ol:"",
          bp:"",
          temp:"",
          remark:""
        },
        detail:[],
        name:"",
        patientno:"",
        disease:"",
        regno:"",
        gender:"",
        age:""
  })
 
    const onChangeText = (key, val) => {
    setState({
      ...state,
      vital:{
           ...state.vital,
              [key]:val
         }
      
    })
   
  }
  console.log(route.params.patientno)
  const submit=()=>{
  //  console.log(state.name,state.regno,state.patientno,state.disease,state.gender,state.age)
  //  console.log(state.vital)
      if( state.vital.date && state.vital.ol && state.vital.bp && state.vital.temp && state.vital.remark)
      {
         let data=state.detail.filter(data=>data.date!==state.vital.date);
     
        data.push(state.vital)
        console.log("Hello",data)
        axios.post(`http://192.168.43.59:4000/patient/${route.params.patientno}`,{
          name:state.name,
          patientno:state.patientno,
          detail:data,
          disease:state.disease,
          regno:state.regno,
          gender:state.gender,
          age:state.age
        })
        console.log(state.detail)
        alert("Vitals updated successfully")
      }
      
  }  
      
    

  return (
    <View style={{ flex: 1,  justifyContent: 'center' }}>
   
    <View style={styles.container}>
    <View style ={styles.regforms}>
    
          <Text style={styles.header}>Vital Data</Text>
          <TextInput style={styles.textinput} placeholder="Oxygen Level"
           onChangeText={val =>onChangeText('ol', val)}
          underlineColorAndroid={'transparent'}
          />
          <TextInput style={styles.textinput} placeholder="Date"
           onChangeText={val =>onChangeText('date', val)}
          underlineColorAndroid={'transparent'}
          />
         
          <TextInput style={styles.textinput} placeholder="Body Temp"
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('temp', val)}
          />
          <TextInput style={styles.textinput} placeholder="Blood Presure"
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('bp', val)}
          />
          
          <TextInput style={styles.textinput} placeholder="Remarks"
         
          underlineColorAndroid={'transparent'}
          onChangeText={val =>onChangeText('remark', val)}
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

export default Addvital;
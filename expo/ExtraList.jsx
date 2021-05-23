import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Button } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
function PatientList ({navigation})  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/patient')
      .then(({ data }) => {
        console.log("data", data)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            console.log("item", item)
            return (
              <Text style={{ flex: 1, backgroundColor: '' }}>Patient No:{item.patientno},Patient Name: {item.name}<Button title="Add vitals" onPress={() => navigation.navigate('Addvital')} /></Text>
              
            )
          }}
        />
        
      )}
    </View>
  );
};
export default PatientList
import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingsScreen() {


   let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#2c3e50', }}>
      
      <Text style={{textAlign:'center',color:'white',fontFamily:'Inter_900Black',fontSize:35,marginVertical:30,marginTop:90}}>DESENVOLVEDOR</Text>
      <Image style={{height:250,width:'65%',borderRadius:500,marginHorizontal:20}} 
      source={require('../img/foto.jpg')} />

      <View style={{backgroundColor:'white', 
        marginHorizontal:20,padding:15,borderRadius:30,marginVertical:20}}>

          <Text style={{textAlign:'center'}}>
          Gabriel Antonio Da Silva Souto
          </Text>
          <Text style={{marginTop:10,textAlign:'center'}}>
          Estudante da Etec De Guaianazes, cursando o 3-mtec em Desenvolvimento de sistemas.
          </Text>
        
        </View>
    
    </View>
  );
}
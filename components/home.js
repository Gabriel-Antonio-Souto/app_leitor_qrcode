import * as React from 'react';
import { Text, View,Image,ScrollView } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {

   let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ 
      flex: 1, 
     // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#2c3e50',
      }}>

          <Text style={{textAlign:'center',color:'white'
          ,fontSize:40,marginVertical:30,fontFamily:'Inter_900Black',marginTop:90}}>PORTAL RABIES VIRUS</Text>

        <ScrollView>
        
          <View>
            <Image source={require('../img/raiva.png')} 
            style={{width:200,height:200,marginTop:30} } />
          </View>
          
        </ScrollView>
        <Text style={{marginTop:10,marginBottom:50,textAlign:'center',color:'white'}}>
          Acesse: https://gabriel-antonio-souto.github.io/portal_rabies_virus/
          </Text>
    </View>
  );
}
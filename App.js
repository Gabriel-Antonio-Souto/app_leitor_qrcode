import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './components/home';
import Qrcode from './components/qrcode';
import SettingsScreen from './components/dev';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#D3D3D3',
        }}
        screenOptions={{
          tabBarStyle: { backgroundColor: '#1590f2' }
          }}

        initialRouteName="Home">
        <Tab.Screen
          name="QR code"
          component={Qrcode}
          options={{
            headerShown: false,
            tabBarLabel: 'QR code',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="qrcode" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Desenvolvedor"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Desenvolvedor',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

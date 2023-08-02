import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import HomeMarket from "./features/Marketplace/HomeMarket.js";
import SignIn from "./features/LoginSignup/Signin.js";
import MyListings from './features/MyListings/MyListings.js';

const Tab = createBottomTabNavigator();

export default function App() {
  const [profile, setProfile] = useState({});
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">

      <Tab.Screen name="Home" component={HomeMarket} />
      <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: 'Settings',
          }}
          children={() => <SignIn profile={profile} setProfile={setProfile} />}
        />
      <Tab.Screen name="My Listings" component={MyListings} />
      </Tab.Navigator>
      </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E4B363',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


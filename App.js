import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeMarket from "./features/Marketplace/HomeMarket.js";
import Signin from "./features/LoginSignup/Signin.js";
import Cart from './features/Cart/CartPage.js';
import UserProfile from './features/UserProfile/UserProfile.js';
import SignIn from "./features/LoginSignup/Signin.js";
import MyListings from './features/MyListings/MyListings.js';
import PublicProfile from './features/UserProfile/PublicProfile.js';
import Purchases from './features/UserProfile/Purchases.js';
import Product from './features/Listing/ProductPage.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeMarket} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="My Listings" component={MyListings} />
      <Stack.Screen name="Public Profile" component={PublicProfile} />
      <Stack.Screen name="Purchases" component={Purchases} />
    </Stack.Navigator>
  );
}


export default function App() {
  const [profile, setProfile] = useState({});
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">

        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Account" component={UserProfile} />
        <Tab.Screen
          name="SignIn"
          options={{
            tabBarLabel: 'Sign In',
          }}
          children={() => <SignIn profile={profile} setProfile={setProfile} />}
        />

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


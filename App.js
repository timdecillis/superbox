import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import HomeMarket from "./pages/HomeMarket.js";
import Signin from "./pages/Signin.js";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeMarket} />
      <Tab.Screen name="Settings" component={Signin} />
    </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

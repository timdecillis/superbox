import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {userData} from '../../assets/dummy-data/userData.js'

export default function UserProfile() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        style={styles.backgroundImage}
        resizeMode='contain'
      >

        <ScrollView style={styles.main}>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4B363',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


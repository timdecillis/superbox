import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {userData} from '../../assets/dummy-data/userData.js'

export default function PublicProfile() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{userData.userName}</Text>
        <Text style={styles.header}>{userData.rating && userData.rating}</Text>
        <Text style={styles.header}>{userData.interests}</Text>
      </View>
    </View>
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


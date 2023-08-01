import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch } from 'react-native';

import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import PersonalBlock from './PersonalBlock.js';

export default function UserProfile() {

  const [data, setData] = useState(userData);



  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        style={styles.backgroundImage}
        resizeMode='contain'>

        <ScrollView style={styles.main}>

          <Text style={styles.mainHeading}>Hi, {data.firstName}!</Text>

          <PersonalBlock data={data} />

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Settings</Text>
            <View style={styles.infoBlock}>
              <Text style={styles.setting}>Dark Mode</Text>
              <Switch style={styles.settingSwitch} />
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={[styles.sectionHeading, {color: '#ef6461'}]}>Contact Superbox</Text>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    fontSize: '20em'
  },
  backgroundImage: {
    flex: 1,
    width: '95%',
    justifyContent: 'center'
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  body: {
    borderTopWidth: '3%',
    borderTopColor: '#ef6461',
    borderBottomWidth: '3%',
    borderBottomColor: '#ef6461',
    flex: .75,
    backgroundColor: '#e8e9eb',
  },
  buttonContainer: {
    paddingTop: '1%',
    // justifyContent: 'center',
    alignItems: 'center',
    // borderLeftWidth: '.5%',
    minWidth: '15%'
  },

  container: {
    flex: 1,
    backgroundColor: '#e4b363',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    color: '#ef6461',
    fontSize: '20em',
  },
  infoLeft: {
    padding: '.5%'
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0dfd5',
    borderWidth: '.5%',
    borderRadius: 2,
    marginBottom: '2%',
    alignItems: 'center',
    padding: '2%'
  },
  infoType: {
    fontWeight: 'bold'
  },
  line: {
    marginBottom: '3%',
    fontSize: '15em'
  },
  main: {
    padding: '3%',
  },
  mainHeading: {
    fontSize: '45em',
    color: '#313638'
  },
  sectionContainer: {
    borderRadius: '5',
    padding: '3%',
    marginBottom: '3%',
    backgroundColor: 'rgba(255, 255, 255, .92)'
  },
  sectionHeading: {
    fontSize: '20em',
    marginBottom: 8,
    textDecorationLine: 'underline'
  },
  setting: {
    fontWeight: 'bold',
    fontSize: '17em'
  },
  settingSwitch: {
    // minHeight: '10em'
  },
  text: {
    marginBottom: 0
  }
});
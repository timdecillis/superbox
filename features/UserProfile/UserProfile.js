import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch } from 'react-native';

import { GlobalV, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
import logo from '../../assets/LogoTitle.png';
import PersonalBlock from './PersonalBlock.js';

export default function UserProfile({profile, setProfile, navigation, handleProfileUpdate}) {



  return (
    <GlobalV>
        <ScrollView>
          <GlobalText style={styles.mainHeading}>Hi, {profile.firstName}!</GlobalText>

          <GlobalV style={styles.sectionContainer}>
            <GlobalV style={styles.buttonHeading}>

              <TouchableOpacity onPress={() => navigation.navigate('Inbox', {
                user_id: 1,
                authorization: 1
              })}style={styles.buttonContainer}>
                <GlobalText style={[styles.option, { color: '#ef6461' }]}>Inbox</GlobalText>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('My Listings', {
                user_id: 1,
                authorization: 1
              })}style={styles.buttonContainer}>
                <GlobalText style={[styles.option, { color: '#ef6461' }]}>Listings</GlobalText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer}>
                <GlobalText onPress={() => navigation.navigate('Purchases', {
                  user_id: 1,
                  authorization: 1
                })}style={[styles.option, { color: '#ef6461' }]}>Purchases</GlobalText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer}>
                <GlobalText onPress={() => navigation.navigate('Public Profile', {
                  user_id: 1
                })}style={[styles.option, { color: '#ef6461' }]}>View Profile</GlobalText>
              </TouchableOpacity>

            </GlobalV>
          </GlobalV>

          <PersonalBlock handleProfileUpdate={handleProfileUpdate}profile={profile} />

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Settings</Text>
            <View style={styles.infoBlock}>
              <Text style={styles.setting}>Dark Mode</Text>
              <Switch style={styles.settingSwitch} />
            </View>
          </View>

          <View style={styles.sectionContainer}>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={[styles.sectionHeading, { color: '#ef6461' }]}>Contact Us</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => {
              setProfile({});
              navigation.navigate('Settings');
              }}style={styles.buttonContainer}>
              <Text style={[styles.sectionHeading, { color: '#ef6461' }]}>Log Out</Text>
            </TouchableOpacity> */}
          </View>

        </ScrollView>
    </GlobalV>
  );
}

const styles = StyleSheet.create({
  buttonHeading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    left: '180%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    color: '#ef6461',
    fontSize: 20,
  },
  infoLeft: {
    padding: '.5%'
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: '.5%',
    borderRadius: 2,
    marginBottom: '2%',
    alignItems: 'center',
    padding: '2%'
  },
  infoType: {
    fontWeight: 'bold'
  },
  main: {
    padding: '3%',
  },
  mainHeading: {
    fontSize: 45,
    color: '#313638',
    marginBottom: 15
  },
  option: {
    textDecorationLine: 'underline',
    width: 80,
  },
  sectionContainer: {
    borderRadius: '5',
    padding: '3%',
    marginBottom: '3%',
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
    textDecorationLine: 'underline'
  },
  setting: {
    fontWeight: 'bold',
    fontSize: 17
  },
});
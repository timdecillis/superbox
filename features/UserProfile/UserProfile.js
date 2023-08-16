import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Switch, Linking } from 'react-native';

import { UserProfileContext } from '../../App.js'
import { GlobalViewFlat, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
import logo from '../../assets/LogoTitle.png';
import PersonalBlock from './PersonalBlock.js';
import {updatePersonal} from '../../lib/userRequestHelpers.js';
import {userData} from '../../assets/dummy-data/userData.js';

export default function UserProfile({navigation}) {


  const [dark, setDark] = useState(false);
  const [profile, setProfile] = useState(userData)

  const onToggleSwitch = () => {
      setDark(!dark);
      updatePersonal(profile.firebase_uid, profile.idToken, 'dark', !dark);
  }

  const handleContactUs = async () => {
    try {
      await Linking.openURL('mailto:clarkkent@superbox.com');
    } catch (error) {
      console.error("Error opening email client:", error);
    }
  };

  if (profile === null) {
    return null;
  }

  return (
    <GlobalViewFlat style={styles.container}>


      <ScrollView>
        <GlobalText style={styles.mainHeading}>Hi, {profile.username}!</GlobalText>


        <GlobalViewFlat style={styles.buttonHeading}>

          <TouchableOpacity onPress={() => navigation.navigate('Conversations')} style={styles.buttonContainer}>
            <GlobalText style={[styles.option, { color: '#ef6461' }]}>Messages</GlobalText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('My Listings', {
            user_id: 1,
            authorization: 1
          })} style={styles.buttonContainer}>
            <GlobalText style={[styles.option, { color: '#ef6461' }]}>Listings</GlobalText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <GlobalText onPress={() => navigation.navigate('Purchases', {
              user_id: 1,
              authorization: 1
            })} style={[styles.option, { color: '#ef6461' }]}>Purchases</GlobalText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <GlobalText onPress={() => navigation.navigate('Public Profile', {
              user_id: 1
            })} style={[styles.option, { color: '#ef6461', textAlign: 'center' }]}>Profile</GlobalText>
          </TouchableOpacity>

        </GlobalViewFlat>


        <PersonalBlock profile={profile} />

        <GlobalViewFlat style={styles.sectionContainer}>
          <GlobalText style={styles.sectionHeading}>Settings</GlobalText>
          <GlobalViewFlat style={styles.infoBlock}>
            <GlobalText style={styles.setting}>Dark Mode</GlobalText>
            <Switch
              style={styles.settingSwitch}
              value={dark}
              onValueChange={onToggleSwitch}
            />
          </GlobalViewFlat>
        </GlobalViewFlat>

        <GlobalViewFlat style={styles.sectionContainer}>

          <TouchableOpacity onPress={handleContactUs}style={styles.buttonContainer}>
            <GlobalText style={[styles.sectionHeading, { color: '#ef6461', textDecorationLine: 'underline' }]}>Contact Us</GlobalText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setProfile(null);
            navigation.navigate('SignIn');
          }} style={styles.buttonContainer}>
            <GlobalText style={[styles.sectionHeading, { color: '#ef6461', textDecorationLine: 'underline' }]}>Log Out</GlobalText>
          </TouchableOpacity>
        </GlobalViewFlat>

      </ScrollView>
    </GlobalViewFlat>
  );
}

const styles = StyleSheet.create({
  buttonHeading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: 10
  },
  editButton: {
    color: '#ef6461',
    fontSize: 10,
  },
  infoLeft: {
    padding: '.5%'
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: '.5%',
    borderBottomWidth: '.5%',
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
    fontSize: 17,
    width: 80,
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
    color: '#313638'
  },
  setting: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#313638'

  },
});

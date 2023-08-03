import React from 'react';
const axios = require('axios');
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch, Modal } from 'react-native';

import { GlobalV, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
// import {handleProfileUpdate} from '../../lib/requestHelpers.js';

const obscurePass = (password) => {
  let result = '';
  for (let index = 0; index < password.length; index++) {
    result += '*';
  }
  return result;
};

export default PersonalBlock = ({ profile, handleProfileUpdate }) => {
  // const handleUpdate = (field, newData) => {
  //   return axios.put(`/api/u/users/${profile.user_id}/profile`, {[field]: newData})
  //   .then(() => {
  //     handleProfileUpdate()
  //   })
  // };
  return (
    <GlobalV style={styles.sectionContainer}>

      <GlobalText style={styles.sectionHeading}>Personal Information</GlobalText>

      <GlobalV style={styles.infoBlock}>
        <GlobalV style={styles.infoLeft}>
          <GlobalText style={styles.infoType}>Name: </GlobalText>
          <GlobalText style={styles.info}>{profile.firstName} {profile.lastName}</GlobalText>
        </GlobalV>

        <TouchableOpacity onPress={handleProfileUpdate}style={styles.buttonContainer}>
          <GlobalText style={styles.editButton}>Edit</GlobalText>
        </TouchableOpacity>
      </GlobalV>

      <GlobalV style={styles.infoBlock}>
        <GlobalV style={styles.infoLeft}>
          <GlobalText style={styles.infoType}>Email:</GlobalText>
          <GlobalText style={styles.info}>{profile.email}</GlobalText>
        </GlobalV>

        <TouchableOpacity style={styles.buttonContainer}>
          <GlobalText style={styles.editButton}>Edit</GlobalText>
        </TouchableOpacity>
      </GlobalV>
      {/* <GlobalV style={styles.infoBlock}>
                <GlobalV style={styles.infoLeft}>
                  <GlobalText style={styles.infoType}>Password:</GlobalText>
                  <GlobalText style={styles.info}>{obscurePass(profile.password)}</GlobalText>
                </GlobalV>
                <TouchableOpacity style={styles.buttonContainer}>
                  <GlobalText style={styles.editButton}>Edit</GlobalText>
                </TouchableOpacity>
              </GlobalV> */}
      <GlobalV style={styles.infoBlock}>
        <GlobalV style={styles.infoLeft}>
          <GlobalText style={styles.infoType}>Primary phone number:</GlobalText>
          <GlobalText style={styles.info}>{profile.phone.slice(0, 3)}-{profile.phone.slice(3, 6)}-{profile.phone.slice(6, 10)}</GlobalText>
        </GlobalV>
        <TouchableOpacity style={styles.buttonContainer}>
          <GlobalText style={styles.editButton}>Edit</GlobalText>
        </TouchableOpacity>
      </GlobalV>

      <GlobalV style={styles.infoBlock}>
        <GlobalV style={styles.infoLeft}>
          <GlobalText style={styles.infoType}>Address:</GlobalText>
          <GlobalText style={[styles.line, styles.text]}>{profile.address1}</GlobalText>
          {profile.address2 && <GlobalText style={[styles.line, styles.text]}>{profile.address2}</GlobalText>}
          <GlobalText style={[styles.line, styles.text]}>{profile.city}, {profile.state}</GlobalText>
          <GlobalText style={[styles.line, styles.text]}>{profile.zip}</GlobalText>
        </GlobalV>
        <TouchableOpacity style={styles.buttonContainer}>
          <GlobalText style={styles.editButton}>Edit</GlobalText>
        </TouchableOpacity>
      </GlobalV>
    </GlobalV>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: '1%',
    alignItems: 'center',
    minWidth: '15%'
  },
  editButton: {
    color: '#ef6461',
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: '.5%',
    borderRadius: 2,
    marginBottom: '2%',

  },
  infoType: {
    fontWeight: 'bold',
    color: '#313638'
  },
  sectionContainer: {
    borderRadius: '5',
    marginBottom: '3%',
    backgroundColor: 'rgba(255, 255, 255, .92)'
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
  },

});
import React, { useState, useContext } from 'react';
const axios = require('axios');
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch, Modal, TextInput } from 'react-native';

import { UserProfileContext } from '../../App.js'
import { GlobalViewFlat, GlobalText, GlobalTitle, GlobalCartButton, GlobalCartButtonText } from '../../globalComponents/globalStyles.js';
import { updatePersonal } from '../../lib/userRequestHelpers.js';
import AddressModal from './AddressModal.js';
import PhoneModal from './PhoneModal.js';
import NameModal from './NameModal.js';
import EmailModal from './EmailModal.js';
import {userData} from '../../assets/dummy-data/userData.js';


const obscurePass = (password) => {
  let result = '';
  for (let index = 0; index < password.length; index++) {
    result += '*';
  }
  return result;
};

export default PersonalBlock = () => {

  const [profile, setProfile] = useState(userData);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [addressModalOpen, setAddressModalOpen] = useState(false);

  return (
    <GlobalViewFlat style={styles.sectionContainer}>

    <NameModal name={name} setName={setName} nameModalOpen={nameModalOpen} setNameModalOpen={setNameModalOpen}/>
    <EmailModal email={email} setEmail={setEmail} emailModalOpen={emailModalOpen} setEmailModalOpen={setEmailModalOpen}/>
    <PhoneModal phone={[phone]} setPhone={setPhone} phoneModalOpen={phoneModalOpen} setPhoneModalOpen={setPhoneModalOpen}/>
    <AddressModal address={[address]} setAddress={setAddress} addressModalOpen={addressModalOpen} setAddressModalOpen={setAddressModalOpen}/>

      <GlobalText style={styles.sectionHeading}>Personal Information</GlobalText>

      <GlobalViewFlat style={{ padding: 5 }}>
        <GlobalViewFlat style={styles.infoBlock}>
          <GlobalViewFlat style={styles.infoLeft}>
            <GlobalText style={styles.infoType}>Name: </GlobalText>
            <GlobalText style={styles.info}>{profile.full_name}</GlobalText>
          </GlobalViewFlat>

          <TouchableOpacity onPress={() => {
            setNameModalOpen(true);
          }} style={styles.buttonContainer}>
            <GlobalText style={styles.editButton}>Edit</GlobalText>
          </TouchableOpacity>
        </GlobalViewFlat>

        <GlobalViewFlat style={styles.infoBlock}>
          <GlobalViewFlat style={styles.infoLeft}>
            <GlobalText style={styles.infoType}>Email:</GlobalText>
            <GlobalText style={styles.info}>{profile.email}</GlobalText>
          </GlobalViewFlat>

          <TouchableOpacity onPress={() => {
            setEmailModalOpen(true);
          }}style={styles.buttonContainer}>
            <GlobalText style={styles.editButton}>Edit</GlobalText>
          </TouchableOpacity>
        </GlobalViewFlat>

        <GlobalViewFlat style={styles.infoBlock}>
          <GlobalViewFlat style={styles.infoLeft}>
            <GlobalText style={styles.infoType}>Primary phone number:</GlobalText>
            <GlobalText style={styles.info}>{profile.phone_number}</GlobalText>
          </GlobalViewFlat>
          <TouchableOpacity onPress={() => {
            setPhoneModalOpen(true);
          }}style={styles.buttonContainer}>
            <GlobalText style={styles.editButton}>Edit</GlobalText>
          </TouchableOpacity>
        </GlobalViewFlat>

        <GlobalViewFlat style={styles.infoBlock}>
          <GlobalViewFlat style={styles.infoLeft}>
            <GlobalText style={styles.infoType}>Address:</GlobalText>
            <GlobalText style={[styles.line, styles.text]}>{profile.address_line_1}</GlobalText>
            {profile.address_line_2 && <GlobalText style={[styles.line, styles.text]}>{profile.address_line_2}</GlobalText>}
            <GlobalText style={[styles.line, styles.text]}>{profile.city}, {profile.state_abbr}</GlobalText>
            <GlobalText style={[styles.line, styles.text]}>{profile.zip}</GlobalText>
          </GlobalViewFlat>
          <TouchableOpacity onPress={() => {
            setAddressModalOpen(true);
          }}style={styles.buttonContainer}>
            <GlobalText style={styles.editButton}>Edit</GlobalText>
          </TouchableOpacity>
        </GlobalViewFlat>
      </GlobalViewFlat>
    </GlobalViewFlat>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 90,
    elevation: 0,
    paddingHorizontal: 2,
    paddingVertical: 2
  },
  buttonContainer: {
    paddingTop: '1%',
    alignItems: 'center',
    minWidth: '15%'
  },
  buttons: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row'
  },
  editButton: {
    color: '#ef6461',
    fontSize: 13,
    textDecorationLine: 'underline'
  },
  findUser: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 26,
    borderRadius: 20,
    borderWidth: 1,
    width: 300,
    padding: 5
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: '.5%',
    borderRadius: 2,
    padding: 2
  },
  infoType: {
    fontWeight: 'bold',
    color: '#313638',
    fontSize: 13
  },
  modalContainer: {
    position: 'absolute',

    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    width: '100%',
    maxHeight: '90%',
    height: 200,
  },
  sectionContainer: {
    borderRadius: '5',
    marginBottom: '3%',
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
  },
});
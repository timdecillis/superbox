import React, { useState, useContext } from 'react';
const axios = require('axios');
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Switch, Modal, TextInput } from 'react-native';

import { UserProfileContext } from '../../App.js'
import { GlobalViewFlat, GlobalText, GlobalTitle, GlobalCartButton, GlobalCartButtonText } from '../../globalComponents/globalStyles.js';
import { updateAddress } from '../../lib/userRequestHelpers.js';

export default AddressModal = ({ address, setAddress, addressModalOpen, setAddressModalOpen }) => {

  const { profile, setProfile } = useContext(UserProfileContext);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const closeModal = () => {
    setAddressModalOpen(false);
  };

  return (
    <Modal
      visible={addressModalOpen}
      onRequestClose={closeModal}
    >
      <GlobalViewFlat style={styles.modalContainer}>
        <GlobalViewFlat style={styles.modalContent}>
          <GlobalText style={styles.sectionHeading}>Update address</GlobalText>

          <GlobalViewFlat style={styles.addressContainer}>

            <GlobalViewFlat style={styles.addressLine}>
              <TextInput onChangeText={(text) => setAddress1(text)} autoFocus={true} style={styles.findUser}></TextInput>
              <GlobalText style={styles.addressText}>Address Line 1</GlobalText>
            </GlobalViewFlat>

            <GlobalViewFlat style={styles.addressLine}>
              <TextInput onChangeText={(text) => setAddress2(text)} autoFocus={true} style={styles.findUser}></TextInput>
              <GlobalText style={styles.addressText}>Address Line 2</GlobalText>
            </GlobalViewFlat>

            <GlobalViewFlat style={styles.addressLine}>
              <TextInput onChangeText={(text) => setCity(text)} autoFocus={true} style={styles.findUser}></TextInput>
              <GlobalText style={styles.addressText}>City</GlobalText>
            </GlobalViewFlat>

            <GlobalViewFlat style={styles.addressLine}>
              <TextInput maxLength={2} onChangeText={(text) => setState(text)} autoFocus={true} style={[styles.findUser, { width: 30 }]}></TextInput>
              <GlobalText style={styles.addressText}>State</GlobalText>
            </GlobalViewFlat>

            <GlobalViewFlat style={styles.addressLine}>
              <TextInput maxLength={10} onChangeText={(text) => setZip(text)} autoFocus={true} style={[styles.findUser, { width: 91 }]}></TextInput>
              <GlobalText style={styles.addressText}>Zip</GlobalText>
            </GlobalViewFlat>

            <GlobalViewFlat style={styles.modalRight}>
            </GlobalViewFlat>

          </GlobalViewFlat>


          <GlobalViewFlat style={styles.buttons}>
            <GlobalCartButton style={styles.button}>
              <GlobalCartButtonText onPress={closeModal}>Cancel</GlobalCartButtonText>
            </GlobalCartButton>
            <GlobalCartButton onPress={() => {
              updateAddress(profile.firebase_uid, profile.idToken, address1, address2, city, state, zip );
              closeModal();
            }} style={[styles.button, { backgroundColor: '#e4b363' }]}>
              <GlobalCartButtonText>Continue</GlobalCartButtonText>
            </GlobalCartButton>
          </GlobalViewFlat>
        </GlobalViewFlat>
      </GlobalViewFlat>
    </Modal>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    alignItems: 'left',

  },
  addressLine: {
    marginBottom: 6
  },
  addressText: {
    fontSize: 10
  },
  button: {
    height: 40,
    width: 90,
    elevation: 0,
    paddingHorizontal: '2%',
    paddingVertical: '2%'
  },
  buttons: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row'
  },
  findUser: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 26,
    borderWidth: .5,
    width: 300,
    padding: 5,
    height: 30,
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
    height: 360,
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
  },
});
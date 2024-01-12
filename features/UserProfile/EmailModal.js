import React, { useState, useContext } from "react";
const axios = require("axios");
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Switch,
  Modal,
  TextInput,
} from "react-native";

import { UserProfileContext } from "../../App.js";
import {
  GlobalViewFlat,
  GlobalText,
  GlobalTitle,
  GlobalCartButton,
  GlobalCartButtonText,
} from "../../globalComponents/globalStyles.js";
import { updatePersonal } from "../../lib/userRequestHelpers.js";

export default EmailModal = ({
  email,
  setEmail,
  emailModalOpen,
  setEmailModalOpen,
  setProfile,
  profile
}) => {

  const closeModal = () => {
    setEmailModalOpen(false);
  };

  const handleEmailSave = () => {
    setProfile({...profile, email})
  }

  return (
    <Modal visible={emailModalOpen} onRequestClose={closeModal}>
      <GlobalViewFlat style={styles.modalContainer}>
        <GlobalViewFlat style={styles.modalContent}>
          <GlobalText style={styles.sectionHeading}>Update email</GlobalText>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            autoFocus={true}
            style={styles.findUser}
          ></TextInput>
          <GlobalViewFlat style={styles.buttons}>
            <GlobalCartButton style={styles.button}>
              <GlobalCartButtonText onPress={closeModal}>
                Cancel
              </GlobalCartButtonText>
            </GlobalCartButton>
            <GlobalCartButton
              onPress={() => {
                updatePersonal(
                  profile.firebase_uid,
                  profile.idToken,
                  "email",
                  email
                );
                closeModal();
              }}
              style={[styles.button, { backgroundColor: "#e4b363" }]}
            >
              <GlobalCartButtonText onPress={handleEmailSave} >Save</GlobalCartButtonText>
            </GlobalCartButton>
          </GlobalViewFlat>
        </GlobalViewFlat>
      </GlobalViewFlat>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 90,
    elevation: 0,
    paddingHorizontal: "2%",
    paddingVertical: "2%",
  },
  buttons: {
    justifyContent: "space-around",
    width: "100%",
    flexDirection: "row",
  },
  findUser: {
    alignSelf: "center",
    backgroundColor: "white",
    height: 26,
    borderWidth: 0.5,
    width: 300,
    padding: 5,
    height: 40,
    fontSize: 20,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    width: "100%",
    maxHeight: "90%",
    height: 200,
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
  },
});

import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';

const AddEditListingModal = ({ modalInfo, onClose, onSave }) => {
  const [listingInfo, setListingInfo] = useState({status:'inactive'});

  const handleSave = () => {
    //TODO: add validation logic here before saving the new listing
    onSave({ title, status });

    onClose();
  };

  return (
    <Modal visible={modalInfo.visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Product Name"
          value={modalInfo.title}
          onChangeText={name => setListingInfo({...listingInfo, text:name})}
          style={styles.input}
        />
        <TextInput
          placeholder="Product Description"
          value={modalInfo.status}
          onChangeText={text => setDescription(text)}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default AddEditListingModal;
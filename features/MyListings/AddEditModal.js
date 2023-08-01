import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';

const AddEditListingModal = ({ visible, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('active'); // Default status set to 'active'

  const handleSave = () => {
    // You can add validation logic here before saving the new listing
    onSave({ title, status });
    setTitle('');
    setStatus('active');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Status (e.g., active, inactive, fulfilled, unfulfilled)"
          value={status}
          onChangeText={text => setStatus(text)}
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
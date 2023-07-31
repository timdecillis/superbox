import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterBar = ({ activeFilter, onChangeFilter }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, activeFilter === 'active' && styles.activeButton]}
        onPress={() => onChangeFilter('active')}
      >
        <Text style={styles.buttonText}>Active</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, activeFilter === 'inactive' && styles.activeButton]}
        onPress={() => onChangeFilter('inactive')}
      >
        <Text style={styles.buttonText}>Inactive</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, activeFilter === 'unfulfilled' && styles.activeButton]}
        onPress={() => onChangeFilter('unfulfilled')}
      >
        <Text style={styles.buttonText}>Unfulfilled</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, activeFilter === 'fulfilled' && styles.activeButton]}
        onPress={() => onChangeFilter('fulfilled')}
      >
        <Text style={styles.buttonText}>Fulfilled</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  button: {
    padding: 10,
  },
  activeButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FilterBar;

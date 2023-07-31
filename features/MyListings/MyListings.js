import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FilterBar from './FilterBar';

const MyListings = () => {
  const [activeFilter, setActiveFilter] = useState('active');
  const [showModal, setShowModal] = useState({type: null, visible:false, data:{}});

  const dummylistingsData = [
    { id: '1', title: 'Listing 1', status: 'active' },
    { id: '2', title: 'Listing 2', status: 'inactive' },
    { id: '3', title: 'Listing 3', status: 'fulfilled' },
    { id: '4', title: 'Listing 4', status: 'unfulfilled' },
  ];

  const filteredListings = dummylistingsData.filter(item => item.status === activeFilter);

  const handleFilterChange = filter => {
    setActiveFilter(filter);
  };

  const handleAddListing = () => {
    setShowModal({type:'add', visible:true});
  };

  const handleEditListing = () => {

  }


  return (
    <View style={styles.container}>
      <FilterBar activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      <FlatList
        data={filteredListings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Listing title={item.title} status={item.status} />}
      />
      <Button title="Add New Listing" onPress={handleAddNewListing} />
      <NewListingModal visible={showModal} onClose={handleCloseModal} onSave={handleSaveListing} />
    </View>
  );
};

const Listing = ({ title, status }) => {
  return (
    <View style={styles.listingItem} onClick={(e)=>{handleEditListing(e)}}>
      <Text>{title}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyListings;
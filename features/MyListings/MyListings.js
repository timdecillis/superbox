import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';
import FilterBar from './FilterBar';
import AddEditListingModal from './AddEditModal.js';

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

  const handleOpenModal = (type, data) => {
    setShowModal({type:type, visible:true, data:data});
  };

  const handleCloseModal = () => {
    setShowModal({type:null, visible:false});
  };

  const handleSubmitListing = () => {
    //axios.post to add new listing
    //or axios.put to edit
    // or axios.delete to remove listing
    console.log('clicked');
  };




  return (
    <View style={styles.container}>
      <FilterBar activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      <FlatList
        data={filteredListings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Listing data={item} />}
      />
      <Button title="Add New Listing" onPress={()=>handleOpenModal('add', {})} />
      <AddEditListingModal visible={showModal} onClose={handleCloseModal} onSubmit={handleSubmitListing} />
    </View>
  );
};

const Listing = ({ title, status, handleEditListing }) => {
  return (
    <View style={styles.listingItem} onClick={(e)=>{handleOpenModal(e)}}>
      <Text>{title}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  listingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyListings;
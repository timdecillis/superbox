import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import FilterBar from './FilterBar';
import AddEditListingModal from './AddEditModal.js';
import { UserProfileContext } from '../../App.js'
import requestHelpers from '../../lib/productRequestHelpers.js'
import SwipableList from './SwipableList';
import exampleListings from './exampleListings.js'

const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [activeFilter, setActiveFilter] = useState('active');
  const [showModal, setShowModal] = useState({type: null, visible:false, data:{}});
  const { profile, setProfile } = useContext(UserProfileContext);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const mylistings = await requestHelpers.getMyListings(profile);
        setListings(mylistings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    // fetchProducts();
    setListings(exampleListings); //just example listings for now
  }, []);


  useEffect(()=>{
    setFilteredListings(listings.filter(item => item.status === activeFilter));
  },[activeFilter, listings])


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
  };

  const deleteItem = (key) => {
    setListings(listings.filter(item => item.id !== key));
  };

  const changeStatus = (key, newStatus) => {
    const updatedListings = listings.map(item => {
      if(item.id === key) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setListings(updatedListings);
  };

  return (
    <View style={styles.container}>
      <FilterBar activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      <SwipableList
        data={filteredListings}
        renderItem={({ item }) => (
          <View style={styles.listingItem}>
            <Text>{item.title}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
        deleteItem={deleteItem}
        changeStatus={changeStatus}
      />
      <Button title="Add New Listing" onPress={()=>handleOpenModal('add', {})} />
      <AddEditListingModal modalInfo={showModal} onClose={handleCloseModal} onSubmit={handleSubmitListing} />
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

import React, { useState, useContext, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';
import FilterBar from './FilterBar';
import AddEditListingModal from './AddEditModal.js';
import { UserProfileContext } from '../../App.js'
import requestHelpers from '../../lib/productRequestHelpers.js'


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

    fetchProducts();
  }, []);


  useEffect(()=>{
    setFilteredListings(listings.filter(item => item.status === activeFilter));
  },[activeFilter])


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
    // axios.post('')
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
      <AddEditListingModal modalInfo={showModal} onClose={handleCloseModal} onSubmit={handleSubmitListing} />
    </View>
  );
};

const Listing = ({ title, status, handleEditListing }) => {
  return (
    <View style={styles.listingItem} onClick={(e)=>{handleOpenModal('edit',e)}}>
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
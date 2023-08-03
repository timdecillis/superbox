import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Animated, Switch, TextInput } from 'react-native';

import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import DynamicHeader from '../../globalComponents/Search.js';
import { GlobalViewFlat, GlobalText, GlobalView, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating, GlobalButton, GlobalButtonText } from '../../globalComponents/globalStyles.js';

export default function PublicProfile() {

  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const [data, setData] = useState(userData);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <GlobalViewFlat style={styles.container}>
      <TextInput autoFocus={true} style={styles.findUser} placeholder="find another user" />
      <ScrollView>

        <GlobalViewFlat style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <GlobalTitle style={{ textAlign: 'left', marginLeft: 10 }}>{data.userName}</GlobalTitle>
          <GlobalRating style={{ marginRight: 10}}>average rating: {data.rating}</GlobalRating>
        </GlobalViewFlat>


        <GlobalViewFlat style={styles.sectionContainer}>
          <GlobalText style={styles.sectionHeading}>Listings</GlobalText>
          {data.listings.map((listing, i) => {
            return (
              <GlobalViewFlat key={i} style={styles.listing}>
                <GlobalViewFlat style={styles.listingLeft}>
                  <GlobalText style={styles.product}>{listing.product}</GlobalText>
                  <GlobalText style={styles.info}>{listing.info}</GlobalText>
                </GlobalViewFlat>
                <GlobalText>{listing.price}</GlobalText>
              </GlobalViewFlat>
            );
          })}
        </GlobalViewFlat>

        <GlobalViewFlat style={styles.sectionContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <GlobalText style={[styles.sectionHeading, { color: '#ef6461', textDecorationLine: 'underline' }]}>Message User</GlobalText>
          </TouchableOpacity>
        </GlobalViewFlat>


        {isAdmin && <GlobalViewFlat style={[styles.sectionContainer, {  borderTopWidth: .5,
    borderBottomWidth: .5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
          <GlobalText style={styles.sectionHeading}>Ban User</GlobalText>
          <Switch style={styles.settingSwitch} />

        </GlobalViewFlat>}
      </ScrollView>
    </GlobalViewFlat>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '95%',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: '45%',
  },
  buttonHeading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    left: '110%'
  },
  container: {
    flex: 1,
    padding: 10
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
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'space-between',
    borderRadius: 2,
    marginBottom: '2%',
    alignItems: 'center',
    padding: '2%'
  },
  infoType: {
    fontWeight: 'bold',

    color: '#313638',
  },
  listing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1%',
    borderTopWidth: '1%'
  },
  product: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  main: {
    padding: '3%',
  },
  mainHeading: {
    fontSize: 45,
    color: '#313638',
  },
  sectionContainer: {
    padding: 5,
    marginBottom: 5,

  },
  sectionHeading: {
    fontSize: 22,
    borderBottomWidth: .5,
    borderTopWidth: .5,
    marginBottom: 8,
    color: '#313638',
  },
  seeAllButton: {
    fontSize: 15,
    color: '#ef6461',
    textDecorationLine: 'underline',
  },
  subHeading: {
    fontSize: 24
  }
});
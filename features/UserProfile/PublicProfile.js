import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Animated, Switch, TextInput } from 'react-native';

import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import DynamicHeader from '../../globalComponents/Search.js';
import { GlobalV, GlobalText, GlobalView, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating, GlobalButton, GlobalButtonText } from '../../globalComponents/globalStyles.js';

export default function PublicProfile() {

  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const [data, setData] = useState(userData);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <GlobalV>
      <TextInput autoFocus={true} style={styles.findUser} placeholder="find another user" />
      <ScrollView>

        <GlobalV style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <GlobalTitle style={{ textAlign: 'left', marginLeft: 10 }}>{data.userName}</GlobalTitle>
          <GlobalRating style={{ marginRight: 10}}>average rating: {data.rating}</GlobalRating>
        </GlobalV>


        <GlobalV style={styles.sectionContainer}>
          <GlobalText style={styles.sectionHeading}>Listings</GlobalText>
          {data.listings.map((listing, i) => {
            return (
              <GlobalV key={i} style={styles.listing}>
                <GlobalV style={styles.listingLeft}>
                  <GlobalText style={styles.product}>{listing.product}</GlobalText>
                  <GlobalText style={styles.info}>{listing.info}</GlobalText>
                </GlobalV>
                <GlobalText>{listing.price}</GlobalText>
              </GlobalV>
            );
          })}
        </GlobalV>

        <GlobalV style={styles.sectionContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <GlobalText style={[styles.sectionHeading, { color: '#ef6461', textDecorationLine: 'underline' }]}>Message User</GlobalText>
          </TouchableOpacity>
        </GlobalV>


        {isAdmin && <GlobalV style={[styles.sectionContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <GlobalText style={styles.sectionHeading}>Ban User</GlobalText>
          <Switch style={styles.settingSwitch} />

        </GlobalV>}
      </ScrollView>
    </GlobalV>
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
    backgroundColor: '#e4b363',
    justifyContent: 'center',
    alignItems: 'center'
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
    borderBottomWidth: '1%'
  },
  product: {
    fontWeight: 'bold'
  },
  main: {
    padding: '3%',
  },
  mainHeading: {
    fontSize: 45,
    color: '#313638',
  },
  sectionContainer: {
    borderWidth: .5,
    padding: '3%',
    marginBottom: '3%',
    backgroundColor: 'rgba(255, 255, 255, .9)'
  },
  sectionHeading: {
    fontSize: 22,
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
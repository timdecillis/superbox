import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { UserProfileContext } from '../../App.js'
import { GlobalViewFlat, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import {getPurchases} from '../../lib/orderRequestHelpers.js';

export default function Purchases() {

  const [purchases, setPurchases] = useState([]);
  const { profile, setProfile } = useContext(UserProfileContext);


  // useEffect(() => {
  //   getPurchases(profile.firebase_uid, profile.idToken)
  //   .then((data) => {
  //     console.log(data)
  //     setPurchases(data);
  //   })
  // }, []);

  return (
    <GlobalViewFlat style={styles.container}>
      <ScrollView>

        <GlobalViewFlat style={styles.sectionContainer}>
          <GlobalText style={styles.sectionHeading}>Your Purchases</GlobalText>
          {purchases.map((purchase, i) => {
            return (
              <GlobalViewFlat key={i} style={styles.listing}>
                <GlobalViewFlat style={styles.listingLeft}>
                  <GlobalText style={styles.product}>{purchase.product}</GlobalText>
                  <GlobalText style={styles.product}>{purchase.price}</GlobalText>
                  <GlobalText style={styles.info}>{purchase.description}</GlobalText>
                </GlobalViewFlat>
                <GlobalViewFlat style={styles.listingLeft}>

                  <GlobalText style={styles.product}>{purchase.created_at}</GlobalText>
                </GlobalViewFlat>
              </GlobalViewFlat>
            );
          })}
        </GlobalViewFlat>

      </ScrollView>

    </GlobalViewFlat>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  info: {
    fontSize: 13
  },
  listing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: .5,
    padding: 4
  },
  product: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 13
  },
  sectionContainer: {
    padding: 5
  },
  sectionHeading: {
    fontSize: 20,
    marginBottom: 8,
  },
});
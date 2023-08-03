import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { GlobalViewFlat, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';
import {getPurchases} from '../../lib/orderRequestHelpers.js';

export default function Purchases() {

  const [data, setData] = useState(userData);

  useEffect(() => {
    getPurchases();
  }, []);

  return (
    <GlobalViewFlat style={styles.container}>
      <ScrollView>

        <GlobalViewFlat style={styles.sectionContainer}>
          <GlobalText style={styles.sectionHeading}>Your Purchases</GlobalText>
          {data.purchases.map((purchase, i) => {
            return (
              <GlobalViewFlat key={i} style={styles.listing}>
                <GlobalViewFlat style={styles.listingLeft}>
                  <GlobalText style={styles.product}>{purchase.product}</GlobalText>
                  <GlobalText style={styles.product}>{purchase.price}</GlobalText>
                  <GlobalText style={styles.info}>{purchase.info}</GlobalText>
                </GlobalViewFlat>
                <GlobalViewFlat style={styles.listingLeft}>

                  <GlobalText style={styles.product}>{purchase.date}</GlobalText>
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
  listing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: .5,
    padding: 4
  },
  product: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  sectionContainer: {
    padding: 5
  },
  sectionHeading: {
    fontSize: 22,
    marginBottom: 8,
  },
});
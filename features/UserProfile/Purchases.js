import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { GlobalViewFlat, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';

export default function UserProfile() {

  const [data, setData] = useState(userData);

  return (
    <GlobalViewFlat style={styles.container}>
      <ScrollView>

        <GlobalViewFlat>
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
    borderBottomWidth: '1%'
  },
  product: {
    fontWeight: 'bold'
  },
  sectionHeading: {
    fontSize: 22,
    marginBottom: 8,
  },
});
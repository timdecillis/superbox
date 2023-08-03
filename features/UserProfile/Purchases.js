import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { GlobalV, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';

export default function UserProfile() {

  const [data, setData] = useState(userData);

  return (
    <GlobalV style={styles.container}>
      <ScrollView>

        <GlobalV>
          <GlobalText style={styles.sectionHeading}>Your Purchases</GlobalText>
          {data.purchases.map((purchase, i) => {
            return (
              <GlobalV key={i} style={styles.listing}>
                <GlobalV style={styles.listingLeft}>
                  <GlobalText style={styles.product}>{purchase.product}</GlobalText>
                  <GlobalText style={styles.product}>{purchase.price}</GlobalText>
                  <GlobalText style={styles.info}>{purchase.info}</GlobalText>
                </GlobalV>
                <GlobalV style={styles.listingLeft}>

                  <GlobalText style={styles.product}>{purchase.date}</GlobalText>
                </GlobalV>
              </GlobalV>
            );
          })}
        </GlobalV>

      </ScrollView>

    </GlobalV>
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
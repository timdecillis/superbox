import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { GlobalV, GlobalText, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalRating } from '../../globalComponents/globalStyles.js';
import logo from '../../assets/LogoTitle.png';
import { userData } from '../../assets/dummy-data/userData.js';

export default function UserProfile() {

  const [data, setData] = useState(userData);

  return (
    <GlobalV>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  listing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0dfd5',
    padding: '1%',
    borderBottomWidth: '1%'
  },
  main: {
    padding: '3%',
  },
  product: {
    fontWeight: 'bold'
  },
  sectionContainer: {
    borderRadius: '5',
    padding: '3%',
    marginBottom: '3%',
    backgroundColor: 'rgba(255, 255, 255, .9)'
  },
  sectionHeading: {
    fontSize: 22,
    marginBottom: 8,
    textDecorationLine: 'underline'
  },
  seeAll: {
    marginTop: '2%',
    maxWidth: '13%'
  },
  seeAllButton: {
    fontSize: 15,
    color: '#ef6461',
    textDecorationLine: 'underline',
  }
});
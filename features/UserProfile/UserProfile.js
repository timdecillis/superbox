import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import {userData} from '../../assets/dummy-data/userData.js'

export default function App() {

  const [data, setData] = useState(userData);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ScrollView style={styles.main}>

          <Text style={styles.mainHeading}>Hi, {data.firstName}!</Text>

          <View style={[styles.sectionContainer, {flexDirection: 'row', justifyContent: 'space-between'}]}>
            <View style={styles.personal}>
              <Text style={styles.sectionHeading}>Personal Information</Text>
              <Text style={styles.line}>{data.firstName} {data.lastName}</Text>
              <Text style={styles.line}>{data.email}</Text>
              <Text style={styles.line}>{data.phone.slice(0, 3)}-{data.phone.slice(3, 6)}-{data.phone.slice(6, 10)} </Text>
              <View style={styles.address}>
                <Text style={[styles.line, styles.text]}>{data.address1}</Text>
                {data.address2 && <Text style={[styles.line, styles.text]}>{data.address2}</Text>}
                <Text style={[styles.line, styles.text]}>{data.city}, {data.state}</Text>
                <Text style={[styles.line, styles.text]}>{data.zip}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.button}>Edit</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.sectionContainer}>
            <View style={styles.messages}>
              <Text style={styles.sectionHeading}>Inbox</Text>
              {data.messages.map((message, i) => {
                return (
                  <View style={styles.message}key={i}>
                    <View style={styles.messageHeading}>
                      <Text style={{fontWeight: 'bold'}}>{message.user}</Text>
                      <Text>{message.date}</Text>
                    </View>
                      <Text>{message.text}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.messages}>
              <Text style={styles.sectionHeading}>Current Listings</Text>
              {data.listings.map((listing, i) => {
                return (
                  <View style={styles.message}key={i}>
                    <View style={styles.messageHeading}>
                      <Text style={{fontWeight: 'bold'}}>{listing.product}</Text>
                      <Text>{listing.date}</Text>
                    </View>
                      <Text>{listing.info}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.messages}>
              <Text style={styles.sectionHeading}>Purchase History</Text>
              {data.purchases.map((listing, i) => {
                return (
                  <View style={styles.message}key={i}>
                    <View style={styles.messageHeading}>
                      <Text style={{fontWeight: 'bold'}}>{listing.product}</Text>
                      <Text>{listing.date}</Text>
                    </View>
                      <Text>{listing.info}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.messages}>
              <Text style={styles.sectionHeading}>Sell History</Text>
              {data.sold.map((listing, i) => {
                return (
                  <View style={styles.message}key={i}>
                    <View style={styles.messageHeading}>
                      <Text style={{fontWeight: 'bold'}}>{listing.product}</Text>
                      <Text>{listing.date}</Text>
                    </View>
                      <Text>{listing.info}</Text>
                  </View>
                );
              })}
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    fontSize: '20em'
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  body: {
    borderTopWidth: '5%',
    borderTopColor: '#ef6461',
    borderBottomWidth: '5%',
    borderBottomColor: '#ef6461',
    flex: .75,
    backgroundColor: '#e8e9eb',
  },
  button: {

    borderWidthTop: '20%',
    color: '#ef6461',
    fontSize: '25em',
  },
  buttonContainer: {
    top: '3.5%',
    maxHeight: '20%'
  },
  container: {
    flex: 1,
    backgroundColor: '#e4b363',
    justifyContent: 'center'
  },
  main: {
    padding: '5%',
  },
  mainHeading: {
    fontSize: '45em',
    color: '#313638'
  },
  message: {
    backgroundColor: '#e0dfd5',
    borderWidth: '.5%',
    borderRadius: 3,
    padding: '2%'
  },
  messageHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  personal: {
    paddingTop: '3%'
  },
  sectionContainer: {
    marginBottom: '3%'
  },
  line: {
    marginBottom: '3%',
    fontSize: '15em'
  },
  sectionHeading: {
    fontSize: '20em',
    marginBottom: 8,
    textDecorationLine: 'underline'
  },
  text: {
    marginBottom: 0
  }
});
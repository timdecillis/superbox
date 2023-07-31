import React, { Component,useState, useRef } from "react";
import { StyleSheet, Text, View, Button, Animated, ScrollView } from 'react-native';
import Search from "../../globalComponents/Search.js";

const HomeMarket = ({ navigation }) => {

  return (
    <View>
      <View style={{alignItems: "center", padding: "5%"}}>
        <Search />
      </View>
    </View>
  )
}
export default HomeMarket;
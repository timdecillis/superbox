import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Messages from './Messages.js';
import { GlobalView } from '../../globalComponents/globalStyles.js';

const Conversations = ({ currentUser }) => {

  const [conversationsArray, setConversationsArray] = useState([]);
  const [activeConversation, setActiveConversations] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={bodyStyles.safeView} >
        <View style={headerStyles.headerContainer}>
          <View style={headerStyles.textContainer}>
            <Text style={headerStyles.headerText}>
              Back
            </Text>
          </View>
          <View style={headerStyles.titleContainer}>
            <Text style={headerStyles.titleText}>
              Messages
            </Text>
          </View>
          <View style={headerStyles.textContainer}>
            <Text style={headerStyles.headerText}>
              Cart
            </Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderBottomWidth: 1
  },
  textContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24
  }
});

const bodyStyles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#FDFAF4'
  }
});

export default Conversations;




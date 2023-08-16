import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Messages from './Messages.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GlobalView, GlobalText, GlobalViewFlat, GlobalTitle, GlobalCartButtonText, GlobalCartButton } from '../../globalComponents/globalStyles.js';
import { getConversations, archiveConversation } from '../../lib/messagesRequests.js';
import { UserProfileContext } from '../../App.js'

const Conversations = ({ navigation, handleProfileUpdate }) => {

  const [conversationsArray, setConversationsArray] = useState([]);
  const [activeConversation, setActiveConversation] = useState({});
  const [conversationSelected, setConversationSelected] = useState(false);
  const { profile, setProfile } = useContext(UserProfileContext);

  const conversations = [{
    id: 1,
    user_1_id: 1,
    user_2_id: 2,
    user_1_username: 'Clark Kent',
    user_2_username: 'Batman123',
    last_message_content: 'Hello?',
    last_mesage_date_created:'2023-08-04T20:07:43Z'
  }, {
    id: 2,
    user_1_id: 1,
    user_2_id: 3,
    user_1_username: 'Clark Kent',
    user_2_username: 'FunkoPopper',
    last_message_content: 'I don\'t like Funko Pops.',
    last_mesage_date_created: '2023-08-04T19:07:43Z',
  }, {
    id: 3,
    user_1_id: 1,
    user_2_id: 4,
    user_1_username: 'Clark Kent',
    user_2_username: 'Spiderman16',
    last_message_content: '$1200 seems like a bad price.',
    last_mesage_date_created:'2023-08-03T20:07:43Z',
  }, {
    id: 4,
    user_1_id: 1,
    user_2_id: 5,
    user_1_username: 'Clark Kent',
    user_2_username: 'ComicMans',
    last_message_content: 'You on Myspace?',
    last_mesage_date_created: '2023-08-02T20:07:43Z',
  }, {
    id: 5,
    user_1_id: 1,
    user_2_id: 6,
    user_1_username: 'Clark Kent',
    user_2_username: 'Joker',
    last_message_content: 'Where is Clark Kent?',
    last_mesage_date_created: '2023-07-04T20:07:43Z',
  }];

  useEffect(() => {
    setConversationsArray(conversations);
  }, []);

  const renderConversation = ({item}) => {

    const dateTimeAgo = moment(item.last_mesage_date_created).fromNow();

    return (
      <TouchableOpacity onPress={() => {
        setActiveConversation(item);
        setConversationSelected(true);
      }}>
        <View style={listStyles.container}>
          <View style={listStyles.icon}>
            <Text style={listStyles.iconText}>
              {item.user_2_username.slice(0, 1)}
            </Text>
          </View>
          <View style={listStyles.textContainer}>
            <View style={listStyles.messageContainer}>
              <GlobalText numberOfLines={1} style={listStyles.messageText}>
                {item.last_message_content}
              </GlobalText>
            </View>
            <View style={listStyles.timeContainer}>
              <GlobalText style={listStyles.timeText}>
                {dateTimeAgo}
              </GlobalText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (!conversationSelected) {
    return (
      <SafeAreaView style={bodyStyles.safeView} >
          <GlobalViewFlat style={headerStyles.headerContainer}>
            <TouchableOpacity style={headerStyles.textContainer} onPress={() => navigation.navigate('Profile', {
              handleProfileUpdate: handleProfileUpdate
                })}>
              <GlobalText>
                Back
              </GlobalText>
            </TouchableOpacity>
            <View style={headerStyles.titleContainer}>
              <GlobalTitle>
                Messages
              </GlobalTitle>
            </View>
            <TouchableOpacity style={headerStyles.textContainer} onPress={() => navigation.navigate('Cart')}>
              <Icon
                name="shopping-cart"
                size={24}
                color="#000"
                />
            </TouchableOpacity>
          </GlobalViewFlat>
        <GlobalView>
          <View style={bodyStyles.bodyContainer}>
            <FlatList
                data={conversationsArray}
                renderItem={renderConversation}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
              />
          </View>
        </GlobalView>
      </SafeAreaView>
    );
  } else {
    return (
      <Messages profile={profile} activeConversation={activeConversation} setActiveConversation={setActiveConversation} setConversationSelected={setConversationSelected} navigation={navigation} />
    );
  }
};




const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  textContainer: {
    height: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  titleText: {
    fontSize: 24,
    flexWrap: 'wrap'
  }
});

const bodyStyles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1
  }
});

const listStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    height: 70,

  },
  icon: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4B363'
  },
  iconText: {
    fontSize: 48
  },
  textContainer: {
    width: 300,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    marginRight: 10
  },
  messageContainer: {
    height: '100%',
    width: 240,
    justifyContent: 'center'
  },
  messageText: {
    fontSize: 16
  },
  timeContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 10,
    color: 'grey',
    textAlign: 'center',
  }
});



export default Conversations;




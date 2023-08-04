import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Keyboard, KeyboardAvoidingView } from 'react-native';
import { getMessages, createMessage, deleteMessage } from '../../lib/messagesRequests.js';
import { GlobalView, GlobalText, GlobalTitle, GlobalCartButtonText, GlobalCartButton } from '../../globalComponents/globalStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';


const Messages = ({ currentUser, activeConversation, setActiveConversation, setConversationSelected, navigation }) => {

  const [inputValue, setInputValue] = useState('');
  let [messagesArray, setMessagesArray] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {

    if (!!currentUser && !!activeConversation.id) {
      getMessages(activeConversation.id)
        .then((result) => {
          setMessagesArray(result);
        })
        .catch((err) => {
          console.error('Error retrieving messages:', err);
          setMessagesArray([]);
        });
    }

  }, [activeConversation]);

  const handleSubmit = () => {
    data = {
      conversationId: activeConversation.id,
      content: inputValue
    }

    createMessage(data, currentUser.idToken)
      .catch((err) => {
        console.error('Error posting message:', err);
      })
      .then(() => {
        return getMessages(activeConversation.id)
      })
      .catch((err) => {
        console.error('Error retrieving messages:', err);
      })
      .then((messages) => {
        setMessagesArray(messages);
        setInputValue('');
      });
  };

  messagesArray = [{ id: 1} , { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6}, { id: 7}, { id: 8}, { id: 9}, { id: 10}, { id: 11}, { id: 12}, { id: 13}, { id: 13}, { id: 13}, { id: 13}, { id: 13}, { id: 13}, { id: 13}];
  // messagesArray = [{ id: 1} , { id: 2}];

  const renderMessage = ({ item }) => {

    if (item.id % 2 === 0) {
      return (
        <View style={[styles.messageContainer, styles.currentUserMessageContainer]}>
          <Text style={styles.messageText}>
            This is a message {item.id}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            This is a message {item.id}
          </Text>
        </View>
      );
    }

  };

  return (
    <SafeAreaView style={styles.safeView} >
      <View style={headerStyles.headerContainer}>
        <TouchableOpacity style={headerStyles.textContainer} onPress={() => {
          setActiveConversation({});
          setConversationSelected(false);
          setMessagesArray([]);
          }}
        >
          <Text style={headerStyles.headerText}>
            Back
          </Text>
        </TouchableOpacity>
        <View style={headerStyles.titleContainer}>
          <GlobalTitle>
            {activeConversation.username}
          </GlobalTitle>
        </View>
        <TouchableOpacity style={headerStyles.textContainer} onPress={() => navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
          {/* <KeyboardAvoidingView> */}
        <View style={styles.bodyContainer}>
          <FlatList
            data={messagesArray}
            renderItem={renderMessage}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
            />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Send message..."
            style={styles.input}
            onSubmitEditing={Keyboard.dismiss}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>
              Send
            </Text>
          </TouchableOpacity>
            </View>
        </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#FDFAF4'
  },
  bodyContainer: {
    flex: 1,
    paddingTop: 10,
  },
  messageContainer: {
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 10,
    backgroundColor: '#e6e6e6',
    alignSelf: 'flex-start',
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  currentUserMessageContainer: {
    backgroundColor: '#E4B363',
    alignSelf: 'flex-end'
  },
  messageText: {
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 270,
    height: 40,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  submitButton: {
    width: 90,
    height: 42,
    backgroundColor: 'dodgerblue',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});

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


export default Messages;
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Keyboard, KeyboardAvoidingView } from 'react-native';
import { getMessages, createMessage, deleteMessage } from '../../lib/messagesRequests.js';
import { GlobalView, GlobalText, GlobalViewFlat, GlobalTitle, GlobalCartButtonText, GlobalCartButton } from '../../globalComponents/globalStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';


const Messages = ({ profile, activeConversation, setActiveConversation, setConversationSelected, navigation }) => {

  const [inputValue, setInputValue] = useState('Are you there?');
  let [messagesArray, setMessagesArray] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const messages = [
    {
      id: 1,
      author_id: 1,
      content: "Hey, I saw your comic book listing. Is it still available?",
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      author_id: 2,
      content: "Yes, it's still available. Are you interested?",
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      author_id: 1,
      content: "Absolutely! Can you share your experience with these?",
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      author_id: 2,
      content: "Sure thing! They sat on a shelf in their original packaging.",
      created_at: new Date().toISOString()
    },
    {
      id: 5,
      author_id: 1,
      content: "Wow that's great. I would love to do that.",
      created_at: new Date().toISOString()
    },
    {
      id: 6,
      author_id: 2,
      content: "Yes you should to keep it in excellent condition, no tears or marks.",
      created_at: new Date().toISOString()
    },
    {
      id: 7,
      author_id: 1,
      content: "Awesome! Can you drop the price to $1,157 for me?",
      created_at: new Date().toISOString()
    },
    {
      id: 8,
      author_id: 1,
      content: "Hello?",
      created_at: new Date().toISOString()
    }
  ];

  useEffect(() => {

    // if (!!profile && !!activeConversation.id) {
    //   getMessages(activeConversation.id)
    //     .then((result) => {
    //       setMessagesArray(result.data);
    //     })
    //     .catch((err) => {
    //       console.error('Error retrieving messages:', err);
    //       setMessagesArray([]);
    //     });
    // }

    setMessagesArray(messages);

  }, [activeConversation]);

  const handleSubmit = () => {
    // data = {
    //   conversationId: activeConversation.id,
    //   content: inputValue
    // }

    // createMessage(data, profile.idToken)
    //   .catch((err) => {
    //     console.error('Error posting message:', err);
    //   })
    //   .then(() => {
    //     return getMessages(activeConversation.id)
    //   })
    //   .catch((err) => {
    //     console.error('Error retrieving messages:', err);
    //   })
    //   .then((messages) => {
    //     setMessagesArray(messages);
    //     setInputValue('');
    //   });

    let messagesCopy = messagesArray.slice();
    messagesCopy.push({
        id: 8,
        author_id: 1,
        content: "Are you there?",
        created_at: new Date().toISOString()
    })

    setMessagesArray(messagesCopy);
  };

  // messagesArray = [{ id: 1} , { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6}, { id: 7}, { id: 8}, { id: 9}, { id: 10}, { id: 11}, { id: 12}, { id: 13}, { id: 13}, { id: 13}, { id: 13}, { id: 13}, { id: 13}, { id: 13}];

  const renderMessage = ({ item }) => {

    if (item.author_id === 1) {
      return (
        <View style={[styles.messageContainer, styles.profileMessageContainer]}>
          <GlobalText>
            {item.content}
          </GlobalText>
        </View>
      );
    } else {
      return (
        <View style={styles.messageContainer}>
          <GlobalText>
            {item.content}
          </GlobalText>
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
            <GlobalText>
              Back
            </GlobalText>
          </TouchableOpacity>
          <View style={headerStyles.titleContainer}>
            <GlobalTitle>
              Batman123
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
    justifyContent: 'flex-end',
    maxWidth: '50%'
  },
  profileMessageContainer: {
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
    alignItems: 'center',
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
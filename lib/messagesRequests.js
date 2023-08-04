import axios from 'axios';

const baseUrl = 'http://3.141.17.132'

const getConversations = (idToken) => {
  return axios.get(`${baseUrl}/api/m/conversations`, {
    headers: {
      'authorization': idToken
    }
  });
};

const getMessages = (conversationId, idToken) => {
  return axios.get(`${baseUrl}/api/m/messages/${conversationId}`, {
    headers: {
      'authorization': idToken
    }
  })
};

const createMessage = (data, idToken) => {
  return axios.post(`${baseUrl}/api/m/messages`, data, {
    headers: {
      'Content-Type': 'application/json',
      'authorization': idToken
    }
  });
};

const archiveConversation = (conversationId, idToken) => {
  return axios.put(`${baseUrl}/api/m/conversations/${conversationId}/archive`, {
    headers: {
      'authorization': idToken
    }
  });
};

const deleteMessage = (messageId, idToken) => {
  return axios.delete(`${baseUrl}/api/m/messages/${messageId}`, {
    headers: {
      'authorization': idToken
    }
  });
};

export { getConversations, getMessages, createMessage, archiveConversation, deleteMessage };


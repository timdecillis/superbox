import axios from 'axios';

const baseUrl = 'http://3.141.17.132'

export const getConversationsByUser = (idToken) => {
  return axios.get(`${baseUrl}/api/m/conversations`, {
    headers: {
      'authorization': idToken
    }
  })
};

export const getMessagesForConversation = (conversationId, idToken) => {
  return axios.get(`${baseUrl}/api/m/messages/${conversationId}`, {
    headers: {
      'authorization': idToken
    }
  })
};

export const createMessage = (data, idToken) => {
  return axios.post(`${baseUrl}/api/m/messages`, data, {
    headers: {
      'Content-Type': 'application/json',
      'authorization': idToken
    }
  });
};

export const archiveConversation = (conversationId, idToken) => {
  return axios.put(`${baseUrl}/api/m/conversations/${conversationId}/archive`, {
    headers: {
      'authorization': idToken
    }
  });
};

export const deleteMesssage = (messageId, idToken) => {
  return axios.delete(`${baseUrl}/api/m/messages/${messageId}`, {
    headers: {
      'authorization': idToken
    }
  })
};


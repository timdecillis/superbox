import axios from 'axios';

const baseUrl = 'http://3.141.17.132'

export const getActiveListings = (uid, token) => {
  console.log('retrieving listings')
  return axios.get(baseUrl + `/api/lp/users${uid}`, {headers: {'authentication': token}})
};

export const getPurchases = (uid, token) => {
  console.log('retrieving purchases')
  return axios.get(baseUrl + '/api/om/purchases', {headers: {'user_id': uid, 'authentication': token}})
};
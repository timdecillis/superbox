import axios from 'axios';

const baseUrl = 'http://3.141.17.132'

export const getPurchases = (user) => {
  console.log('retrieving purchases')
  return axios.get(baseUrl + '/api/om/purchases')
};
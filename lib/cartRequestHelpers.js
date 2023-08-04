import axios from 'axios';

export const fetchCart = () => {
  const config = {headers:{
    user_id: 1
  }}
  return axios.get('http://3.141.17.132/api/om/cart', config);
}
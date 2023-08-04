import axios from 'axios';

const baseUrl = 'http://3.141.17.132'

export const retrievePublic = (uid) => {
    console.log('retrieving public');
    return axios.get(baseUrl + `/api/u/users/${uid}`)
};
export const updatePersonal = (uid, field, update) => {
    console.log('field:' + field, 'update:' + update);
    return axios.post()
};

// export const getPurchases = (uid) => {
//     console.log('retrieving purchases')
//     return axios.get(baseUrl + '/api/om/purchases'{headers: {'user_id': uid}})
//   };
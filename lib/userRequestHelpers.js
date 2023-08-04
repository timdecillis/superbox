import axios from 'axios';

const baseUrl = 'http://3.141.17.132'

export const retrievePublic = (user) => {
    console.log('retrieving public');
    return axios.get(baseUrl + `/api/u/users/${user}`)
};
export const updatePersonal = (user, field, update) => {
    console.log('field:' + field, 'update:' + update);
    return axios.post()
};
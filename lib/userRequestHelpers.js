import axios from 'axios';

const baseUrl = 'http://3.141.17.132'

export const retrievePublic = (uid) => {
    console.log('retrieving public');
    return axios.get(baseUrl + `/api/u/users/${uid}`)
};
export const updatePersonal = (uid, token, field, update) => {
    let data = {
        [field]: update
    };
    console.log(data);
    return axios.put(`/api/u/users/${uid}/profile`, data, {headers: {'authentication': token}})
};
export const banUser = (uid, token) => {
    return axios.put(`/api/u/users/${uid}/profile`, {headers: {'authentication': token}})
};
export const updateAddress = (uid, token, address1, address2, city, state, zip) => {
    let data = {
        address_line_1: address1,
        address_line_2: address2,
        city: city,
        state_abbr: state,
        zip: zip
    };
    console.log(data);
    return axios.put(`/api/u/users/${uid}/profile`, data, {headers: {'authentication': token}})
};


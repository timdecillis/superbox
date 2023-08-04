import axios from 'axios';

let server = 'http://3.141.17.132/api/';

const requestHelpers = {
  handleProfileUpdate: () => {
    console.log('handling');
  },

  getProducts: async () => {
    let res = await axios.get(server + 'lp');
    return res.data;
  },

  getProductNamesIdsCats: async () => {
    let res = await axios.get(server + 'lp');
    return res.data.map((item) => ({
      name: item.product_name,
      id: item.id,
      category:item.category
    }));
  },

  getMyListings: async (profile)=>{
    console.log(profile)
    let auth = profile.idToken;
    let config = {
      headers: {
        Authorization:auth
      }
    };
    let listings = await axios.get(server + 'lp/mylistings/')
    return listings;
  },

  addNewListing: async (obj) => {
    console.log(obj)
  },
  addNewProduct: async (obj) => {
    console.log(obj)
  },
  changeListingStatus: async (obj) => {
    console.log(obj)
  },
  removeListing: async (id) => {
    console.log(obj)
  },
};

export default requestHelpers;

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
  },

};

export default requestHelpers;

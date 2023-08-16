import React from "react";
import {useContext} from 'react';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Text, View, Image, Pressable } from 'react-native';
import  axios from 'axios';

import {UserProfileContext} from '../../App.js'
import { GlobalView, GlobalPrice, GlobalTitle, GlobalParagraph, GlobalCartButton, GlobalCartButtonText } from  '../../globalComponents/globalStyles.js';
import ProductCard from "../../globalComponents/ProductCard.js"

const Product = () => {
  const { profile, setProfile } = useContext(UserProfileContext);
  const route = useRoute();
  const { product } = route.params;
  const navigation = useNavigation();

const CardSizer = styled.View`
align-items: center;
justify-content: center;
margin-bottom: 50px;
height: 95%;
width: 95%;
`;

const addToCart = async (idToken) => {
  try {
    const response = await axios.post('http://3.141.17.132/api/om/cart', {listing_id: 318}, {
      headers: {
        'authorization': idToken
      }
    })
    console.log("ADDED TO CART");
  } catch (error) {
    console.error(error);
  }
}

  return (
    <GlobalView>

      <CardSizer >
        <ProductCard product={product}/>
         <GlobalCartButton onPress={ profile ? () => addToCart(profile.id) : console.log('No profile')}>
          <GlobalCartButtonText>Add to Cart</GlobalCartButtonText>
         </GlobalCartButton>
      </CardSizer>

    </GlobalView>
  )
}
export default Product;
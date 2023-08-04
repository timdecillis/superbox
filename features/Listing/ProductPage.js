import React from "react";
import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native';
import { Text, View, Image, Pressable } from 'react-native';
import { GlobalView, GlobalPrice, GlobalTitle, GlobalParagraph, GlobalCartButton, GlobalCartButtonText } from  '../../globalComponents/globalStyles.js';
import ProductCard from "../../globalComponents/ProductCard.js"

const Product = () => {
  const route = useRoute();
  const { product } = route.params;

const CardSizer = styled.View`
align-items: center;
justify-content: center;
margin-bottom: 50px;
height: 95%;
width: 95%;
`;



  return (
    <GlobalView>

      <CardSizer>
        <ProductCard product={product}/>
         <GlobalCartButton>
          <GlobalCartButtonText>Add to Cart</GlobalCartButtonText>
         </GlobalCartButton>
      </CardSizer>

    </GlobalView>
  )
}
export default Product;
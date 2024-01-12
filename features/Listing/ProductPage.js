import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Text, View, Image, Pressable } from "react-native";
import axios from "axios";

import { UserProfileContext } from "../../App.js";
import {
  GlobalView,
  GlobalPrice,
  GlobalTitle,
  GlobalParagraph,
  GlobalCartButton,
  GlobalCartButtonText,
} from "../../globalComponents/globalStyles.js";
import ProductCard from "../../globalComponents/ProductCard.js";

const Product = () => {
  const { profile, setProfile } = useContext(UserProfileContext);
  const [confirmOpen, setConfirmOpen] = useState(false);

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

  const addToCart = () => {
    let oldCart = profile.cart;
    oldCart.push(product);
    setConfirmOpen(true);
    setTimeout(() => {
      setConfirmOpen(false);
    }, 2000)
  };

  return (
    <GlobalView>
      <CardSizer>
        <ProductCard product={product} />
        {confirmOpen &&
        <Text>Added to Cart!</Text>}
        <GlobalCartButton
          onPress={addToCart}
        >
          <GlobalCartButtonText>Add to Cart</GlobalCartButtonText>
        </GlobalCartButton>

      </CardSizer>
    </GlobalView>
  );
};
export default Product;

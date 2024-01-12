import {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

import { userData } from "../../assets/dummy-data/userData.js";

import {UserProfileContext} from '../../App.js'
import CartCard from './CartCard.js';
import {Container, ItemNumberContainer, CartInfoContainer, SubTotalContainer} from './styles.js';
import {GlobalView, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalCartButton, GlobalCartButtonText, GlobalText} from '../../globalComponents/globalStyles.js';
import {fetchCart} from '../../lib/cartRequestHelpers.js'

const CartPage = () => {

  const[products, setProducts] = useState([]);

  // useEffect(()=> {
  //   fetchCart()
  //     .then(result => setProducts(result.data))
  //     .catch(err => console.log('unable to fetch cart, ', err));
  // }, [])

  const calculateTotal = () => {
    const prices = parseMoney(products);
    console.log(prices);
    const total =  prices.reduce((accu,prices) => accu + prices, 0);
    return new Intl.NumberFormat().format(total);

  }

  const parseMoney = (products) => {
    return products.map(product => Number(product.price.slice(1)));
  }

  const navigation = useNavigation();
  console.log('this is the products, ', products);
  return (
    <GlobalView>

      <Container>

        <ItemNumberContainer>
          <GlobalTitle>
            Your Cart has {products.length} {products.length === 1 ? 'Item': 'Items'}
          </GlobalTitle>
        </ItemNumberContainer>
        <CartInfoContainer>
          {products.map((product, i) => <CartCard key={i} product={product}/>)}
        </CartInfoContainer>
        <SubTotalContainer>
          {products[0].price ? <GlobalPrice>Subtotal: ${calculateTotal()}</GlobalPrice> : <></>}
          <GlobalCartButton
          onPress={() => {Alert.alert('Payment confirmed! Your items are on their way!'); navigation.navigate('Home')}}
        ><GlobalCartButtonText>Checkout</GlobalCartButtonText></GlobalCartButton>
        </SubTotalContainer>
      </Container>
    </GlobalView>
  )
}
export default CartPage;
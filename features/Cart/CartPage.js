import {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

import CartCard from './CartCard.js';
import {Container, ItemNumberContainer, CartInfoContainer, SubTotalContainer} from './styles.js';
import {GlobalView, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalCartButton, GlobalCartButtonText, GlobalText} from '../../globalComponents/globalStyles.js';
import {fetchCart} from '../../lib/cartRequestHelpers.js'

const CartPage = () => {

  const[products, setProducts] = useState([
    {id: 3, product_name: 'the amazing spider-man #50', photo_url: "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/30/23/asset/c14c01274175/sub-buzz-532-1648681737-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", price:'$79.99'}
  ]);

  useEffect(()=> {
    fetchCart()
      .then(result => setProducts(result.data))
      .catch(err => console.log('unable to fetch cart, ', err));
  }, [])

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
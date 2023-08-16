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
    {product_id: 1, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 2, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 3, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 4, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 5, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"}

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
          {products.map(product => <CartCard key={product.product_id} product={product}/>)}
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
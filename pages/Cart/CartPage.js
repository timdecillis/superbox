import {useState} from "react";
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import styled from 'styled-components/native'
import CartCard from './CartCard.js';
import {Container, ItemNumberContainer, CartInfoContainer, SubTotalContainer} from './styles.js';
const CartPage = () => {
  const[products, setProducts] = useState([
    {product_id: 1, product_name: "Spiderman Version 2.0", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 2, product_name: "Spiderman Version 2.0", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 3, product_name: "Spiderman Version 2.0", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"}]);

    const calculateTotal = () => {
      return products.reduce((accu,product) => accu + Number(product.product_price),  0)
    }

    const styles= StyleSheet.create({
      stretch: {
        width: 50,
        height: 50,
      }
    });

  return (
    <Container>

      <ItemNumberContainer>
        <Text>
          Your Cart has {products.length} {products.length === 1 ? 'Item': 'Items'}
        </Text>
      </ItemNumberContainer>
      <CartInfoContainer>
        {products.map(product => <CartCard key={product.product_id} product={product}/>)}
      </CartInfoContainer>
      <SubTotalContainer>
        <Text>Subtotal: ${calculateTotal()}</Text>
        <Button
        title="Checkout"
        onPress={() => Alert.alert('Payment confirmed! Your items are on their way!')}
      />
      </SubTotalContainer>
    </Container>
  )
}
export default CartPage;
import {useState} from "react";
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import styled from 'styled-components/native'

const CartPage = () => {
  const[products, setProducts] = useState([
    {product_name: "Spiderman Version 2.0", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_name: "Spiderman Version 2.0", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_name: "Spiderman Version 2.0", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"}]);

    const calculateTotal = () => {
      return products.reduce((accu,product) => accu + Number(product.product_price),  0)
    }
  const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;`;

  const ItemNumberContainer = styled.View`
    flex: 0.25;
    `
  const CartInfoContainer = styled.View`
    flex: 0.50;
    `
  const SubTotalContainer = styled.View`
    flex: 0.25;
    `
  return (
    <Container>

      <ItemNumberContainer>
        <Text>
          Your Cart has {products.length} Items
        </Text>
      </ItemNumberContainer>
      <CartInfoContainer>
        {products.map(product =>
        <View>
          <Text>{product.product_name}</Text>
          <Text>{product.product_description}</Text>
          <Text>{product.product_price}</Text>
        </View>)}
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
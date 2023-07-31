import {View, Image, Text} from 'react-native';

const CartCard = ({product}) => {

  return (
    <View>
      <Image
      source={{uri: product.product_image}} />
      <Text>{product.product_name}</Text>
      <Text>{product.product_description}</Text>
      <Text>{product.product_price}</Text>
    </View>
  )
}

export default CartCard;

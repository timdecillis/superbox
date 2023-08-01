import {View, Image, Text} from 'react-native';
import {CardContainer} from './styles.js';
const CartCard = ({product}) => {

  return (
    <CardContainer >
      <Image
      source={{uri: product.product_image}}
      style={{width: 50, height: 50}} />
      <View style={{flex:1}}>
        <Text>{product.product_name}</Text>
        <Text>Description: {product.product_description}</Text>
        <Text>Price: ${product.product_price}</Text>
      </View>

    </CardContainer>
  )
}

export default CartCard;

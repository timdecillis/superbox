import {View, Image, Text} from 'react-native';
import {CardContainer} from './styles.js';
const CartCard = ({product}) => {

  return (
    <CardContainer >
      <Image
        source={{uri: product.product_image}}
        style={{width: 50, height: 45, marginRight: 20}} />
      <Text style={{ marginRight: 20}}>{product.product_name}</Text>
      <Text> ${product.product_price}</Text>




    </CardContainer>
  )
}

export default CartCard;

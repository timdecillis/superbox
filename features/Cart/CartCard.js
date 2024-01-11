import {View, Image, Text} from 'react-native';

import {CardContainer} from './styles.js';
import {GlobalPrice} from '../../globalComponents/globalStyles.js'

const CartCard = ({product}) => {

  console.log('image url:', product.photo_url)

  return (
    <CardContainer >
      <Image
        source={{uri:product.product_image }}
        style={{width: 50, height: 45, marginRight: 20}} />
      <Text style={{ marginRight: 20}}>{product.product_name}</Text>
      <GlobalPrice> {product.price} </GlobalPrice>
    </CardContainer>
  )
}

export default CartCard;
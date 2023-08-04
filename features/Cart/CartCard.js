import {View, Image, Text} from 'react-native';
import {CardContainer} from './styles.js';
import {GlobalPrice} from '../../globalComponents/globalStyles.js'
const CartCard = ({product}) => {

  // const photoURL = (product.photos &&  product.photos[0]) ? product.photos[0].photo_url : 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg' ;

  return (
    <CardContainer >
      <Image
        source={{uri:product.photo_url }}
        style={{width: 50, height: 45, marginRight: 20}} />
      <Text style={{ marginRight: 20}}>{product.product_name}</Text>
      <GlobalPrice> {product.price} </GlobalPrice>
    </CardContainer>
  )
}

export default CartCard;

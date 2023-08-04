import React from "react";
import styled from 'styled-components/native'
import { Text, View, Image, Button, ScrollView, Pressable} from 'react-native';
import { GlobalView, GlobalPrice, GlobalTitle, GlobalParagraph, GlobalRating} from  '../globalComponents/globalStyles.js';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductCard = ( {product}) => {
  const navigation = useNavigation();

  const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

const AlignContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const CardContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Card = styled.View`
  width: 75%;
  align-items: center;
`;

const ImgContainer = styled.View`
  width: 100%;
  height: 350px;
  border: 1px solid black;
  margin-bottom: 40px;
  margin-top: 50px;
  justify-content: center;
`;

const ProductImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const DescPrice = styled.View`
align-items: center;
`;

const InfoContainer = styled.View`
  height: 20%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (

    <GlobalView>
      <ScrollContainer>
        <AlignContainer>
      <CardContainer>
      <Card>
        <ImgContainer>
        <ProductImg
          source={{
            uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-03/30/23/asset/c14c01274175/sub-buzz-532-1648681737-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
        }}
        />
        </ImgContainer>
        <GlobalTitle style={{ textDecorationLine: 'underline', textAlign: 'center', marginBottom: 35}}>{product?.product_name ? product.product_name : ''}</GlobalTitle>
        <InfoContainer>
        <DescPrice>
        <GlobalParagraph style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 10}} >{product?.description ? product?.description : ''}</GlobalParagraph >
        <GlobalPrice >$29.99</GlobalPrice>
        </DescPrice>
        <GlobalRating style={{ fontWeight: 'bold', textDecorationLine: 'underline'}} >★★★★★</GlobalRating>
        </InfoContainer>
      </Card>
      </CardContainer>
      </AlignContainer>
      </ScrollContainer>
    </GlobalView>
  )
}

export default ProductCard;
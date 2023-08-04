import React from "react";
import styled from 'styled-components/native'
import { Text, View, Image, Button, ScrollView, Pressable} from 'react-native';
import { GlobalView, GlobalPrice, ProductTitle, GlobalParagraph, GlobalRating} from  '../globalComponents/globalStyles.js';
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

const CardContainer = styled.SafeAreaView`
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
  background-color:  #FDFAF4;
  border: 1px solid black;
  margin-bottom: 26px;
  margin-top: 50px;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 3px 5.5px;
  shadow-opacity: 0.75;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const ProductImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const DescPrice = styled.View`
align-items: center;
`;

const InfoContainer = styled.View`
  height: 32.5%;
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
            uri: product.id === 1 ? 'https://img.buzzfeed.com/buzzfeed-static/static/2022-03/30/23/asset/c14c01274175/sub-buzz-532-1648681737-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto' : product.photo_url,
        }}
        />
        </ImgContainer>
        <InfoContainer>
        <ProductTitle style={{ textDecorationLine: 'underline', textAlign: 'center', fontSize: 29, textShadowColor: 'rgba(0, 0, 0, 0.25)',
  textShadowOffset: { width: .75, height: 1.25 },
  textShadowRadius: 1}}>{product.id === 1 ? 'THE AMAZING SPIDERMAN' : product.product_name.toUpperCase()}</ProductTitle>
        <DescPrice>
        <GlobalParagraph style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.15)',
  textShadowOffset: { width: .75, height: 1.25 },
  textShadowRadius: 1}} >{product.id === 1 ? 'Peter Parker gets his 50th comic book' : product.description}</GlobalParagraph >
        <GlobalPrice style={{fontSize: 18, marginBottom: 10, fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.05)',
  textShadowOffset: { width: .75, height: 1.25 },
  textShadowRadius: 1}} >$29.99</GlobalPrice>
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
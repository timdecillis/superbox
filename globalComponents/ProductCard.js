import React from "react";
import styled from 'styled-components/native'
import { Text, View, Image, Button, ScrollView, Pressable} from 'react-native';
import { GlobalView, GlobalPrice, GlobalTitle, GlobalParagraph, GlobalRating} from  '../globalComponents/globalStyles.js';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {

  const navigation = useNavigation();

  const ScrollContainer = styled.ScrollView`
  `;

  const AlignContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  `

  const CardContainer = styled.View`
  flex-direction: row;
  height: 100%;
  max-height: 100%;
  `

  const Card = styled.View`
  width: 75%;
  align-items: center;
  justify-content: start;
  `;

  const ImgContainer = styled.View`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 40px;
  margin-top: 50px;
  justify-content: center;
  `;

  const ProductImg = styled.Image`
  height: 100%;
  width: 100%;
  `;

  const TempSellerText = styled.Text`
  color: #C51613;
  font-size: 15px;
  font-weight: bold;
  text-decoration-line: underline;
  `;


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

        <GlobalTitle style={{ textDecorationLine: 'underline', textAlign: 'center', marginBottom: 30}}>The Amazing Spiderman</GlobalTitle>
        <GlobalParagraph style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 10}} >50th Issue of The Amazing Spiderman</GlobalParagraph >
        <GlobalPrice style={{marginBottom: 40}}>$29.99</GlobalPrice>
        <GlobalRating style={{ fontWeight: 'bold', textDecorationLine: 'underline'}} >★★★★★</GlobalRating>
      </Card>
      </CardContainer>
      </AlignContainer>
      </ScrollContainer>
    </GlobalView>
  )
}

export default ProductCard;
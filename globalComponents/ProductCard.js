import React from "react";
import styled from 'styled-components/native'
import { Text, View, Image, Button } from 'react-native';
import { GlobalView, GlobalPrice, GlobalTitle, GlobalParagraph} from  '../globalComponents/globalStyles.js';

const ProductCard = () => {

  const CardContainer = styled.View`
  flex-direction: row;
  height: 85%;
  `

  const Card = styled.View`
  width: 75%;
  align-items: center;
  justify-content: start;
  `;

  const ImgContainer = styled.View`
  height: 55%;
  width: 80%;
  margin-bottom: 40px;
  margin-top: 20px;
  justify-content: center;

  `;

  const ProductImg = styled.Image`
  height: 100%;
  width: 100%;
  `;

  const ProductButton = styled.Button`

  `;

  const InfoContainer = styled.View`
  align-items: center;
  padding-top: 20px;
  `;



  return (

    <GlobalView>
      <CardContainer>
      <Card>
        <ImgContainer>
        <ProductImg
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
        }}
        />
        </ImgContainer>

        <GlobalTitle>Product Name</GlobalTitle>
        <InfoContainer>
        <GlobalParagraph>This is a sample description.</GlobalParagraph>
        </InfoContainer>
        <InfoContainer>
        <GlobalPrice>$29.99</GlobalPrice>
        </InfoContainer>
      </Card>
      </CardContainer>
    </GlobalView>
  )
}

export default ProductCard;
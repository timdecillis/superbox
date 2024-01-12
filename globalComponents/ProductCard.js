import React from "react";
import styled from "styled-components/native";
import { Text, View, Image, Button, ScrollView, Pressable,
StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  GlobalView,
  GlobalPrice,
  ProductTitle,
  GlobalParagraph,
  GlobalRating,
} from "../globalComponents/globalStyles.js";

const ProductCard = ({ product }) => {
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
    max-height: 350px;
    background-color: #fdfaf4;
    border: 1px solid black;
    margin-bottom: 26px;
    margin-top: 36px;
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
    align-items: center;
    width: 100%;
  `;

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <GlobalView style={styles.view} >
      <ScrollContainer style={styles.view}>
        <AlignContainer style={styles.view}>
          <CardContainer style={styles.view}>
            <Card style={styles.view}>
              <ImgContainer >
                <ProductImg
                  source={{
                    uri: product.photo_url,
                  }}
                />
              </ImgContainer>

              <InfoContainer>
                <ProductTitle
                  style={{
                    textDecorationLine: "underline",
                    textAlign: "center",
                    fontSize: 29,
                    textShadowColor: "rgba(0, 0, 0, 0.25)",
                    textShadowOffset: { width: 0.75, height: 1.25 },
                    textShadowRadius: 1,
                  }}
                >
                  {product.product_name.toUpperCase()}
                </ProductTitle>

                <DescPrice>
                  <GlobalPrice
                    style={{
                      fontSize: 18,
                      fontSize: 20,
                      textShadowColor: "rgba(0, 0, 0, 0.05)",
                      textShadowOffset: { width: 0.75, height: 1.25 },
                      textShadowRadius: 1,
                    }}
                  >
                    {product.price}
                  </GlobalPrice>
                </DescPrice>

                <GlobalRating
                  style={{
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  ★★★★★
                </GlobalRating>

              </InfoContainer>

            </Card>
          </CardContainer>
        </AlignContainer>
      </ScrollContainer>
    </GlobalView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  view: {
    marginBottom: 0,
    marginTop: 0
  }
});

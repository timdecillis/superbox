import React, { useState, useRef, useEffect } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";
import axios from "axios";

import Product from "../Listing/ProductPage";
import DynamicHeader from "../../globalComponents/Search.js";
import ProductCard from "../../globalComponents/ProductCard.js";
import {
  GlobalViewFlat,
  GlobalText,
  GlobalTitle,
  GlobalView,
} from "../../globalComponents/globalStyles.js";

export default function App() {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {id: 1, product_name: 'x-men #1', photo_url: 'https://cdn.powered-by-nitrosell.com/product_images/14/3286/DCDL263604.jpg', price: '$199.99'},
    {id: 2, product_name: 'batman the killing joke', photo_url: "https://cdn.powered-by-nitrosell.com/product_images/14/3286/DCD356988.jpg", price: '$49.99'},
    {id: 3, product_name: 'the amazing spider-man #50', photo_url: "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/30/23/asset/c14c01274175/sub-buzz-532-1648681737-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", price:'$79.99'},
    {id: 4, product_name: 'the death of superman', photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Superman75.jpg/220px-Superman75.jpg", price: '$39.95'}
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [resetList, setResetList] = useState(false);

  // useEffect(() => {
  //   axios.get("http://3.141.17.132/api/lp")
  //   .then((response)=> {
  //     setProducts(response.data);
  //   })
  //   .catch((error)=> {
  //     console.log(error);
  //   })
  // }, [resetList]);

  const handleSearch = (value) => {
    filteredList = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].product_name.includes(value)) {
        filteredList.push(products[i]);
      }
    }
    setProducts(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalView>
        <GlobalViewFlat>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
              { useNativeDriver: false }
            )}
          >
            {products.map((product, i) => (
              <View key={i} style={{ height: 650 }}>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Product", { product: product })
                  }
                >
                  <ProductCard key={product.id} product={product} />
                </Pressable>
              </View>
            ))}
          </ScrollView>
        </GlobalViewFlat>

      </GlobalView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0,
  },
  scrollText: {
    fontSize: 19,
    textAlign: "center",
    padding: 20,
    color: "#000",
  },
});

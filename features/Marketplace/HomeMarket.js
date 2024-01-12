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
  const [products, setProducts] = useState([]);
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
            {products.map((product) => (
              <View style={{ height: 650 }}>
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

import React, { useState, useRef, useEffect } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, Animated, StyleSheet, View } from 'react-native';
import Product from '../Listing/ProductPage'
import { useNavigation } from '@react-navigation/native';
import DynamicHeader from '../../globalComponents/Search.js';
import ProductCard from '../../globalComponents/ProductCard.js';
import { GlobalViewFlat, GlobalText, GlobalTitle } from '../../globalComponents/globalStyles.js';
import axios from 'axios';

export default function App() {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://3.141.17.132/api/lp")
    .then((response)=> {
      setProducts(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GlobalViewFlat>
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}
        >
        {/* <Pressable onPress={() => navigation.navigate('Product')}>
        <View style={{height: 400}}>
          <ProductCard />
        </View>
        </Pressable>
        <View style={{height: 400}}>
          <ProductCard />
        </View>
        <View style={{height: 400}}>
          <ProductCard />
        </View> */}
        {products.map(product =>
                  <View style={{height: 400}}>
                  <ProductCard key={product.id} product={product}/>
                </View>)}
      </ScrollView>
        </GlobalViewFlat>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0
  },
  scrollText: {
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000'
  }
});
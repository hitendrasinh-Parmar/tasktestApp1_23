import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native"
import React, { useContext, useEffect, useState } from 'react'
import useStyles from "../styles/useStyles";
import Api from '../api/Api';
import { useAppContext } from "../context/AppContext";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setProducts } from "../redux/slices/AppSlice";
import Categories from "../components/Categories";
import ImageFragment from '../images/ImageFragement';
import { Product } from "../types/global";
import { useTheme } from "../theme/ThemeProvider"; 4
import * as RootNavigationServices from '../services/RootNavigationServices';

const ProductScreen = () => {
  const __s = useStyles();

  // const { products, setProducts } = useAppContext();
  const products = useAppSelector((state) => state.app.products);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const getProducts = async () => {

    try {
      setLoading(true);
      let response: any = await Api.fetchProducts();
      setLoading(false);
      response = JSON.parse(JSON.stringify(response?.data?.products));
      console.log('res', response);
      if (response) {
        dispatch(setProducts(response))
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <View style={[__s.bgColorGreen, __s.flex1, __s.paddingT24]}>
      {
        loading ? <View style={[__s.flex1, __s.alignJustifyCenter]}>
          <ActivityIndicator size={'large'} color={theme?.colors?.black} />
        </View> :
          <>
            <Categories />
            <FlatList
              showsVerticalScrollIndicator={false}
              // horizontal
              data={products}
              keyExtractor={({ item }: any) => item?._id}
              renderItem={({ item, index }: { item: Product, index: number }) =>
                <Card item={item} index={index} />}
              numColumns={2}
              contentContainerStyle={[__s.alignCenter, __s.marginH10, __s.paddingB80]}
            />
          </>
      }

      <TouchableOpacity
        onPress={() => {
          RootNavigationServices.navigate('CreateProduct')
        }}
        style={[__s.posa, { bottom: 30, right: 20 }, __s.bgColorBlack, __s.paddingV10, __s.paddingH16, __s.borderRadius25]}>
        <Text
          style={[
            __s.font18,
            __s.fontPoppinsMedium,
            __s.fontGreen,
            __s.flexWrap,
            // __s.textCenter,
          ]}>
          Add New Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductScreen;
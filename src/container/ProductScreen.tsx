import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native"
import React, { useEffect, } from 'react'
import useStyles from "../styles/useStyles";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProducts } from "../redux/slices/AppSlice";
import Categories from "../components/Categories";
import { ColorsInterface, Product } from "../types/global";
import { useTheme } from "../theme/ThemeProvider"; 4
import * as RootNavigationServices from '../services/RootNavigationServices';

const ProductScreen = () => {
  const __s = useStyles();
  const products = useAppSelector((state) => state.app.products);
  const loading = useAppSelector((state) => state.app.loading);
  const dispatch = useAppDispatch();
  const { theme }: { theme: ColorsInterface } = useTheme();

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <View style={[__s.bgColorGreen, __s.flex1,]}>
      <View style={[__s.paddingV20, __s.bgColorWhite, __s.borderRadiusB4, __s.alignJustifyCenter]}>
        <Text
          style={[
            __s.font15,
            __s.fontPoppinsBold,
            __s.fontGreen,
            __s.flexWrap,
            // __s.textCenter,
          ]}>
          Shop from out latest collection
        </Text>
      </View>
      <View>
        <Categories />
      </View>
      {
        loading ?
          <View style={[__s.flex1, __s.alignJustifyCenter]}>
            <ActivityIndicator size={'large'} color={theme?.black} />
          </View>
          :
          <FlatList
            showsVerticalScrollIndicator={false}
            // horizontal
            data={products}
            keyExtractor={({ item }: any) => item?._id + item?.createdAt || Math.random()}
            renderItem={({ item, index }: { item: Product, index: number }) =>
              <Card item={item} index={index} />}
            numColumns={2}
            contentContainerStyle={[__s.alignCenter, __s.marginH10, __s.paddingB80]}
            style={[__s.flex1]}
          />

      }

      <TouchableOpacity
        onPress={() => {
          RootNavigationServices.navigate('CreateProduct')
        }}
        style={[__s.posa, { bottom: 30, right: 20 }, __s.bgColorBlack, __s.paddingV10, __s.paddingH16, __s.borderRadius25]}>
        <Text
          style={[
            __s.font15,
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
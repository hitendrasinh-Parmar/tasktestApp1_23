import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from 'react';
import useStyles from "../styles/useStyles";
import Api from '../api/Api';
// import { useAppContext } from "../context/AppContext";
// import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { setProducts } from "../redux/slices/AppSlice";
import ImageFragement from "../images/ImageFragement";
import Button from "../components/Button";
import * as RootNavigationServices from '../services/RootNavigationServices'
import { Product } from "../types/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeProvider";
import TextInputCustom from "../components/TextInput";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/slices/AppSlice";

// {
//   imageUrl: "https://picsum.photos/200",
//   price: '12',
//   description: "Carry item",
//   title: 'Bag'
// }

const CreateProduct = (props: any) => {
  const [product, setProduct] = useState<any>(null)
  const theme = useTheme();
  const dispatch = useDispatch();
  const __s = useStyles();
  const getProducts = async () => {

    try {
      let response: any = await Api.fetchProducts();
      response = JSON.parse(JSON.stringify(response?.data?.products));
      if (response) {
        dispatch(setProducts(response));
        RootNavigationServices.goBack()
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  const handleAddProduct = async () => {
    try {
      const data = {
        avatar: product?.imageUrl,
        category: 'Shopping',
        description: 'Product description',
        developerEmail: 'textEmail@eww.com',
        price: product?.price,
        name: product?.title
      }

      const response = await Api.addProduct(data);
      if (response) {
        getProducts();
      }
      console.log('response', response);

    } catch (error) {
      console.log('error', error);

    }
  }

  return (
    <SafeAreaView style={[__s.flex1, __s.paddingB24]}>
      <View style={[__s.flexRow, __s.paddingT12]}>
        <Button
          icon={require('../../assets/images/back.png')}
          buttonStyles={[__s.paddingH20, __s.borderRadius10, __s.paddingV10, __s.borderWidth0]}
          onPress={() => {
            RootNavigationServices.goBack()
          }} />
        {/* <View style={[__s.flex1]}></View> */}
      </View>
      <View style={[__s.marginH16, __s.flex1]}>
        <TextInputCustom
          value={product?.title}
          onChangeText={(e) => {
            setProduct({ ...product, title: e })
          }}
          placeholderTextColor={theme?.colors?.gray2}
          placeholderText={'Title'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />

        <TextInputCustom
          value={product?.price}
          onChangeText={(e) => {
            setProduct({ ...product, price: e })
          }}
          placeholderTextColor={theme?.colors?.gray2}
          placeholderText={'Price'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />

        <TextInputCustom
          value={product?.description}
          onChangeText={(e) => {
            setProduct({ ...product, description: e })
          }}
          placeholderTextColor={theme?.colors?.gray2}
          placeholderText={'Description'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />

        <TextInputCustom
          value={product?.imageUrl}
          onChangeText={(e) => {
            setProduct({ ...product, imageUrl: e })
          }}
          placeholderTextColor={theme?.colors?.gray2}
          placeholderText={'Image'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          handleAddProduct()
        }}
        style={[__s.bgColorGray2, __s.paddingV10, __s.paddingH16, __s.borderRadius25, __s.marginH24]}>
        <Text
          style={[
            __s.font18,
            __s.fontPoppinsMedium,
            __s.fontGreen,
            __s.flexWrap,
            __s.textCenter,
          ]}>
          Add New Item
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CreateProduct
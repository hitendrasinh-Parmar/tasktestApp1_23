import { View, Text } from "react-native"
import React from 'react';
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


const ProductDetails = () => {
  const __s = useStyles();

  // const { products, setProducts } = useAppContext();
  const products = useAppSelector((state) => state.app.products)
  const dispatch = useAppDispatch()
  const TextEl = () => {
    return (
      <>
        <Text
          style={[
            __s.font20,
            __s.fontPoppinsRegular,
            __s.fontGray,
            __s.flexWrap,
            __s.textCenter,
          ]}>
          Title
        </Text>
        <Text
          style={[
            __s.font18,
            __s.fontPoppinsRegular,
            __s.fontGray,
            __s.flexWrap,
            __s.textCenter,
          ]}>
          Product Description
        </Text>
      </>
    )
  }
  return (
    <View style={[__s.bgColorGray2, __s.flex1,]}>
      <View style={[__s.flexRow,]}>
        <Button icon={require('../../assets/images/back.png')} buttonStyles={[__s.paddingH20, __s.borderRadius10, __s.paddingV10]} onPress={() => {
          RootNavigationServices.goBack()
        }} />
        <View style={[__s.flex1]}></View>
        {/* <Button title="Back" /> */}
      </View>
      <ImageFragement imgUrl={''} imgStyle={[__s.height200, __s.width170]} />
      <TextEl />

    </View>
  )
}

export default ProductDetails;
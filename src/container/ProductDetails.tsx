import { View, Text, ScrollView, ActivityIndicator } from "react-native"
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

const ProductDetails = (props: any) => {
  const __s = useStyles();
  const {
    route: { params }
  } = props;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useTheme();

  const getProduct = async () => {
    console.log('getProduct');
    try {
      setLoading(true);
      let response: any = await Api.getProductById(params?.id);
      setLoading(false);
      response = response?.data?.product;
      if (response) {
        setProduct(response);
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    if (params?.id) {
      getProduct();
    }
  }, [params])
  const TextEl = ({ text }: any) => {
    return (
      <>
        <Text
          style={[
            __s.font15,
            __s.fontPoppinsMedium,
            __s.fontBlack,
            __s.flexWrap,
            // __s.textCenter,
          ]}>
          {text}
        </Text>
      </>
    )
  }
  return (
    <SafeAreaView style={[__s.bgColorWhite, __s.flex1]}>
      <View style={[__s.flexRow, __s.paddingT12]}>
        <Button
          icon={require('../../assets/images/back.png')}
          buttonStyles={[__s.paddingH20, __s.borderRadius10, __s.paddingV10, __s.borderWidth0]}
          onPress={() => {
            RootNavigationServices.goBack()
          }} />
        {/* <View style={[__s.flex1]}></View> */}
      </View>
      {
        loading ? <View style={[__s.flex1, __s.alignJustifyCenter]}>
          <ActivityIndicator size={'large'} color={theme?.colors?.black} />
        </View> :
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={[__s.alignJustifyCenter]}>
              <ImageFragement
                imgUrl={{ uri: product?.avatar }}
                imgStyle={[
                  __s.height500,
                  __s.width350,
                ]} />
            </View>
            <View style={[__s.paddingH24, __s.paddingV24]}>
              <TextEl text={"Product"} />
              <TextEl text={product?.name} />
              <TextEl text={"Description"} />
              <TextEl text={product?.description} />
              <TextEl text={"Price"} />
              <TextEl text={product?.price} />
              <TextEl text={'Category:'} />
              <TextEl text={product?.category} />
            </View>
          </ScrollView>
      }
    </SafeAreaView>
  )
}

export default ProductDetails;
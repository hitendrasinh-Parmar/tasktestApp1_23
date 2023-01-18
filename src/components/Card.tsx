import React from "react";
import { View, Text, Pressable } from "react-native";
import ImageFragement from "../images/ImageFragement";
import useStyles from "../styles/useStyles";
import * as RootNavigationServices from '../services/RootNavigationServices'

const Card = ({ item, index }: { item: any, index: number }) => {
  console.log('item', item);
  const __s = useStyles()
  const { __id, avatar } = item;
  return (
    <Pressable
      onPress={() => {
        RootNavigationServices.navigate('ProductDetails')
      }}
      style={[__s.bgColorWhite, __s.borderRadius10, __s.paddingV16, __s.marginT12,
      index % 2 != 0 && __s.marginL16
      ]}>
      <ImageFragement imgUrl={avatar} imgStyle={[__s.height200, __s.width170]} />
      <Text
        style={[
          __s.font18,
          __s.fontPoppinsBold,
          __s.fontBlack,
          __s.flexWrap,
          __s.textCenter,
        ]}>
        Product
      </Text>
      <Text
        style={[
          __s.font12,
          __s.fontPoppinsRegular,
          __s.fontGray,
          __s.flexWrap,
          __s.textCenter,
        ]}>
        Price
      </Text>
    </Pressable>
  )
}
export default Card;
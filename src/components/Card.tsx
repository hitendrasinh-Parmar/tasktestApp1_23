import React from "react";
import { View, Text, Pressable } from "react-native";
import ImageFragement from "../images/ImageFragement";
import useStyles from "../styles/useStyles";
import * as RootNavigationServices from '../services/RootNavigationServices'
import { Product } from "../types/global";

const Card = ({ item, index }: { item: Product, index: number }) => {
  // console.log('item', item);
  const {
    _id,
    avatar,
    category,
    createdAt,
    description,
    developerEmail,
    name,
    price,
    updatedAt,
  } = item;
  const __s = useStyles();
  return (
    <Pressable
      onPress={() => {
        RootNavigationServices.navigate('ProductDetails', { id: _id })
      }}
      style={[
        __s.bgColorWhite,
        __s.borderRadius10,
        __s.paddingV16,
        __s.marginT12,
        __s.justifyCenter,
        __s.alignCenter,
        __s.width170,
        index % 2 != 0 && __s.marginL16,
      ]}>
      <ImageFragement imgUrl={{ uri: avatar }} imgStyle={[__s.height120, __s.width118]} />
      <View style={[
        __s.justifyCenter,
      ]}>
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={[
            __s.font12,
            __s.fontPoppinsBold,
            __s.fontBlack,
            __s.flexWrap,
            __s.textCenter,
          ]}>
          {name}
        </Text>
      </View>
      <Text
        style={[
          __s.font12,
          __s.fontPoppinsRegular,
          __s.fontGray,
          __s.flexWrap,
          __s.textCenter,
        ]}>
        {category}
      </Text>
    </Pressable>
  )
}
export default Card;
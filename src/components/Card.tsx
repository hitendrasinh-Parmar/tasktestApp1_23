import React from "react";
import { View, Text } from "react-native";
import ImageFragement from "../images/ImageFragement";
import useStyles from "../styles/useStyles";

const Card = ({ item }: { item: any }) => {
  console.log('item', item);
  const __s = useStyles()
  const { __id, avatar } = item;
  return (
    <View style={[__s.bgColorWhite, __s.marginR16, __s.borderRadius10, __s.paddingV16]}>
      <ImageFragement imgUrl={avatar} imgStyle={[__s.height200, __s.width190]} />
      <Text
        style={[
          __s.font18,
          __s.fontPoppinsBold,
          __s.fontBlack,
          __s.flexWrap,
          __s.textCenter,
        ]}>
        Dr. Fillerup Grab
      </Text>
      <Text
        style={[
          __s.font12,
          __s.fontPoppinsRegular,
          __s.fontGray,
          __s.flexWrap,
          __s.textCenter,
        ]}>
        Medicine Specialist
      </Text>
    </View>
  )
}
export default Card;
import React from "react";
import { View, Text, FlatList } from "react-native";
import ImageFragement from "../images/ImageFragement";
import useStyles from "../styles/useStyles";
// import * as RootNavigationServices from '../services/RootNavigationServices'
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Categories = () => {
  // console.log('item', item);
  const __s = useStyles()
  const categories = useAppSelector((state) => state.app.categories)
  const dispatch = useAppDispatch()
  // const { __id, avatar } = item;
  const ListEl = ({ item, index }: any) => {
    return (
      <View style={[__s.marginH15, __s.bgColorWhite, __s.marginV10, __s.borderRadius10, __s.alignJustifyCenter]}>
        <Text
          style={[__s.font15, __s.fontPoppinsMedium, __s.fontGray, __s.textCenter, __s.paddingH10, { lineHeight: 40 }]}>
          category
        </Text>
      </View>
    )
  }
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={[1, 2, 3, 4, 4, 4, 4,]}
      renderItem={(props) => <ListEl {...props} />}
      contentContainerStyle={[__s.alignCenter, __s.marginH10,]}
    />
  )
}
export default Categories;
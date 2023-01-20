import React, { useEffect } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import useStyles from "../styles/useStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCategories, getCategoriesById } from "../redux/slices/AppSlice";
import { Categories } from "../types/global";

const CategoriesFraction = () => {
  const __s = useStyles()
  const categories = useAppSelector((state) => state.app.categories)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const ListEl = ({ item }: { item: Categories, index?: number }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(getCategoriesById(item))
        }}
        style={[__s.marginH5, __s.bgColorBlack, __s.borderRadius10, __s.paddingV8]}>
        <Text
          style={[__s.font12, __s.fontPoppinsBold, __s.fontGreen, __s.paddingH10, __s.textCenter, { height: 16 }
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      keyExtractor={({ item }: any) => item?._id}
      renderItem={({ item, index }: { item: Categories, index: number }) =>
        <ListEl item={item} index={index} />
      }
      contentContainerStyle={[__s.alignCenter, __s.marginH10, __s.paddingT17, __s.paddingB8, __s.paddingR24]}
    />
  )
}
export default CategoriesFraction;
import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ImageFragement from "../images/ImageFragement";
import useStyles from "../styles/useStyles";
// import * as RootNavigationServices from '../services/RootNavigationServices'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Api from "../api/Api";
import { setCategories, setProducts } from "../redux/slices/AppSlice";
import { Categories } from "../types/global";

const CategoriesFraction = () => {
  // console.log('item', item);
  const __s = useStyles()
  const categories = useAppSelector((state) => state.app.categories)
  const dispatch = useAppDispatch()

  const getCategories = async () => {
    console.log('getCategories');

    try {
      let response: any = await Api.fetchCategories();
      response = JSON.parse(JSON.stringify(response?.data?.categories));
      console.log('res', response);
      if (response) {
        dispatch(setCategories(response))
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  const getCategoriesById = async (id: string) => {
    console.log('getCategoriesById');

    try {
      let response: any = await Api.getCategoriesById(id);
      response = JSON.parse(JSON.stringify(response?.data));
      console.log('res', response);
      if (response) {
        // dispatch(setProducts(response))
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getCategories();
  }, [])
  // const { __id, avatar } = item;
  const ListEl = ({ item, index }: { item: Categories, index: number }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          getCategoriesById(item?._id)
        }}
        style={[__s.marginH10, __s.bgColorBlack, __s.marginV10, __s.borderRadius10, __s.alignJustifyCenter]}>
        <Text
          style={[__s.font15, __s.fontPoppinsMedium, __s.fontGreen, __s.textCenter, __s.paddingH10, { lineHeight: 40 }]}>
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
      contentContainerStyle={[__s.alignCenter, __s.marginH10,]}
    />
  )
}
export default CategoriesFraction;
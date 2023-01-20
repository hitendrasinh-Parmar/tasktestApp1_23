import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from 'react';
import useStyles from "../styles/useStyles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Button from "../components/Button";
import * as RootNavigationServices from '../services/RootNavigationServices';
import { Categories, ColorsInterface } from "../types/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeProvider";
import TextInputCustom from "../components/TextInput";
import { handleAddProduct } from "../redux/slices/AppSlice";

const CreateProduct = (props: any) => {
  const [product, setProduct] = useState<any>(null);
  const categories = useAppSelector((state) => state.app.categories)
  const { theme }: { theme: ColorsInterface } = useTheme();
  const dispatch = useAppDispatch();
  const __s = useStyles();


  const ListEl = ({ item }: { item: Categories, index?: number }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setProduct({ ...product, category: item?.name })
        }}
        style={[__s.marginH5, __s.bgColorGray2, __s.marginV10, __s.borderRadius10, __s.alignJustifyCenter,
        item?.name === product?.category && __s.bgColorBlack
        ]}>
        <Text
          style={[__s.font15, __s.fontPoppinsMedium, __s.fontGreen, __s.textCenter, __s.paddingH10, { lineHeight: 40 }]}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[__s.flex1, __s.paddingB24]}>
      <View style={[__s.flexRow, __s.paddingT12]}>
        <Button
          icon={require('../../assets/images/back.png')}
          buttonStyles={[__s.paddingH20, __s.borderRadius10, __s.paddingV10, __s.borderWidth0]}
          onPress={() => {
            RootNavigationServices.goBack();
          }} />
        {/* <View style={[__s.flex1]}></View> */}
      </View>
      <View style={[__s.marginH16, __s.flex1]}>
        <TextInputCustom
          value={product?.title}
          onChangeText={(e) => {
            setProduct({ ...product, title: e })
          }}
          placeholderTextColor={theme?.gray2}
          placeholderText={'Title'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />

        <TextInputCustom
          value={product?.price}
          onChangeText={(e) => {
            setProduct({ ...product, price: e })
          }}
          placeholderTextColor={theme?.gray2}
          placeholderText={'Price'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />

        <TextInputCustom
          value={product?.description}
          onChangeText={(e) => {
            setProduct({ ...product, description: e })
          }}
          placeholderTextColor={theme?.gray2}
          placeholderText={'Description'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />

        <TextInputCustom
          value={product?.imageUrl}
          onChangeText={(e) => {
            setProduct({ ...product, imageUrl: e })
          }}
          placeholderTextColor={theme?.gray2}
          placeholderText={'Image'}
          wrapperStyle={[__s.marginT12, __s.borderRadius4]}
        />

        <View style={[__s.flexWrap, __s.marginT12, __s.flexRow, __s.flex1]}>
          {
            categories?.map((item: Categories, index: number) =>
              <ListEl key={item?._id + item?.createdAt} item={item} index={index} />
            )
          }
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(handleAddProduct(product));
        }}
        style={[__s.paddingV10, __s.paddingH16, __s.borderRadius25, __s.marginH24, { backgroundColor: "#434342" }]}>
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
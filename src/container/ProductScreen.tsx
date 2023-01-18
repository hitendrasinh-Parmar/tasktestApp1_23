import { View } from "react-native"
import React, { useContext, useEffect } from 'react'
import useStyles from "../styles/useStyles";
import Api from '../api/Api';
import { useAppContext } from "../context/AppContext";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setProducts } from "../redux/slices/AppSlice";

const ProductScreen = () => {
  const __s = useStyles();

  // const { products, setProducts } = useAppContext();
  const products = useAppSelector((state) => state.app.products)
  const dispatch = useAppDispatch()

  const getProducts = async () => {
    console.log('getProducts');

    try {
      let response: any = await Api.fetchProducts();
      response = JSON.parse(JSON.stringify(response?.data?.products));
      console.log('res', response);
      if (response) {
        dispatch(setProducts(response))
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    // getProducts();
  }, [])
  return (
    <View style={[__s.bgColorGray2, __s.flex1,]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        // horizontal
        data={[1, 2, 3, 4, 4, 4, 4,]}
        renderItem={(props) => <Card {...props} />}
        numColumns={2}
        contentContainerStyle={[__s.alignCenter, __s.marginH10]}
      />
    </View>
  )
}

export default ProductScreen;
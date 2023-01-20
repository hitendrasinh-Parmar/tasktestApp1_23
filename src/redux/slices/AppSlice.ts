import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Categories, Product } from '../../types/global';
import Api from '../../api/Api';
import * as RootNavigationServices from '../../services/RootNavigationServices';
import { Alert } from 'react-native';

// Define a type for the slice state
interface AppState {
  products: Array<Product>;
  allProducts: Array<Product>;
  categories: Array<any>;
  loading: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  products: [],
  categories: [],
  loading: false,
  allProducts: []
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
    setAllProducts: (state, actions) => {
      state.allProducts = actions.payload;
    },
    setCategories: (state, actions) => {
      state.categories = actions.payload;
    },
    setLoading: (state, actions) => {
      state.loading = actions.payload
    }
  },
})

export const getCategoriesById = (product: Categories): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      // let response: any = await Api.getCategoriesById(id);
      // response = JSON.parse(JSON.stringify(response?.data));
      // console.log('res', response);
      // dispatch(setProducts(response))
      const filterProducts = state.app.allProducts.filter((thisitem) => thisitem.category === product.name)
      dispatch(setProducts(filterProducts));
    } catch (error) {
      console.log('error', error);
    }
  }
}

export const getCategories = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {

    try {
      let response: any = await Api.fetchCategories();
      response = JSON.parse(JSON.stringify(response?.data?.categories));
      // console.log('res', response);
      if (response) {

        dispatch(setCategories(response))
      }

    } catch (error) {
      console.log('error', error);
    }
  }
}

export const getProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      let response: any = await Api.fetchProducts();
      dispatch(setLoading(false));
      response = JSON.parse(JSON.stringify(response?.data?.products));
      // console.log('res', response);
      if (response) {
        dispatch(setProducts(response))
        dispatch(setAllProducts(response));
      }

    } catch (error) {
      dispatch(setLoading(false));
      console.log('error', error);
    }
  }
}

export const handleAddProduct = (product: any): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    try {
      const data = {
        avatar: product?.imageUrl,
        category: product?.category,
        description: 'Product description',
        developerEmail: 'textEmail@eww.com',
        price: product?.price,
        name: product?.title
      }
      console.log('response', data);

      if (
        data.avatar &&
        data.category &&
        data.description &&
        data.developerEmail &&
        data.price &&
        data.name
      ) {
        const response = await Api.addProduct(data);
        if (response) {
          dispatch(getProducts());
          RootNavigationServices.goBack();
        }
      } else {
        Alert.alert('Please select all fields')
      }
    } catch (error) {
      console.log('error', error);

    }
  }
}

export const { setProducts, setCategories, setLoading, setAllProducts } = AppSlice.actions

export const selectProducts = (state: RootState) => state.app.products
export const selectCategories = (state: RootState) => state.app.categories

export default AppSlice.reducer
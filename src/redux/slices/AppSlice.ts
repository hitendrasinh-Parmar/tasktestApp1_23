import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Product } from '../../types/global';

// Define a type for the slice state
interface AppState {
  products: Array<Product>;
  categories: Array<any>;
}

// Define the initial state using that type
const initialState: AppState = {
  products: [],
  categories: [],
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
    setCategories: (state, actions) => {
      state.categories = actions.payload;
    }
  },
})

export const { setProducts, setCategories } = AppSlice.actions

export const selectProducts = (state: RootState) => state.app.products
export const selectCategories = (state: RootState) => state.app.categories

export default AppSlice.reducer
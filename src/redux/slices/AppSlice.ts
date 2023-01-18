import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AppState {
  products: Array<any>
}

// Define the initial state using that type
const initialState: AppState = {
  products: [],
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    }
  },
})

export const { setProducts } = AppSlice.actions

export const selectProducts = (state: RootState) => state.app.products

export default AppSlice.reducer
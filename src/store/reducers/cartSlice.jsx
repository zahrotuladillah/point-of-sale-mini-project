import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDataCart(state, action) {
      const { data, qty } = action.payload;
      const existingItemIndex = state.dataCart.findIndex(
        item => item.id === data.id
      );
      console.log("ada ",existingItemIndex)
      if (existingItemIndex !== -1) {
        state.dataCart[existingItemIndex].qty += 1;
      } else {
        console.log(data, qty, "yu",action.payload)
        state.dataCart.push({ ...data, qty });
      }
    },
    removeAllDataCart(state) {
      state.dataCart = [];
    },
    removeData(state, action) {
      state.dataCart = state.dataCart.filter(item => item.id !== action.payload.id);
    },
    incrementQty(state, action) {
      const existingItemIndex = state.dataCart.findIndex(
        item => item.id === action.payload.id 
      );
      if (existingItemIndex !== -1) {
        state.dataCart[existingItemIndex].qty++;
      }
    },
    decrementQty(state, action) {
      const existingItemIndex = state.dataCart.findIndex(
        item => item.id === action.payload.id 
      );
      if (existingItemIndex !== -1 && state.dataCart[existingItemIndex].qty > 1) {
        state.dataCart[existingItemIndex].qty--;
      }
    },
    updateDataCart(state, action) {
      state.dataCart = action.payload;
    },
  },
});

export const {
  addDataCart,
  removeAllDataCart,
  removeData,
  incrementQty,
  decrementQty,
  updateDataCart,
} = cartSlice.actions;

export default cartSlice.reducer;
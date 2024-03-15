import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDataCart(state, action) {
      const { data, qty, prod, color, size } = action.payload;
      const existingItemIndex = state.dataCart.findIndex(
        item => item.id === data.id && item.size === size && item.color === color
      );
      console.log("ada ",existingItemIndex)
      if (existingItemIndex !== -1) {
        state.dataCart[existingItemIndex].qty += qty;
      } else {
        state.dataCart.push({ ...data, qty, prod, color, size });
      }
    },
    removeAllDataCart(state) {
      state.dataCart = [];
    },
    removeData(state, action) {
      state.dataCart = state.dataCart.filter(item => item.id !== action.payload.id);
    },
    incrementQty(state, action) {
      const { id, color, size } = action.payload;
      const existingItemIndex = state.dataCart.findIndex(
        item => item.id === id && item.size === size && item.color === color
      );
      if (existingItemIndex !== -1) {
        state.dataCart[existingItemIndex].qty++;
      }
    },
    decrementQty(state, action) {
      const { id, color, size } = action.payload;
      const existingItemIndex = state.dataCart.findIndex(
        item => item.id === id && item.size === size && item.color === color
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
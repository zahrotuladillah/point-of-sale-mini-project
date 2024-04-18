import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataCart: [],
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDataCart(state, action) {
      const { data, qty } = action.payload;
      const existingItemIndex = state.dataCart.findIndex(
        item => item.pid === data.pid
      );
      // console.log("ada ",existingItemIndex)
      if (existingItemIndex !== -1) {
        state.dataCart[existingItemIndex].qty += 1;
      } else {
        // console.log(data, qty, "yu",action.payload)
        state.dataCart.push({ ...data, qty });
      }
    },
    removeAllDataCart(state) {
      state.dataCart = [];
      state.total=0
    },
    removeData(state, action) {
      state.dataCart = state.dataCart.filter(item => item.pid !== action.payload);
    },
    incrementQty(state, action) {
      const existingItemIndex = state.dataCart.findIndex(
        item => item.pid === action.payload
      );
      if (existingItemIndex !== -1) {
        state.dataCart[existingItemIndex].qty++;
      }
    },
    decrementQty(state, action) {
      const existingItemIndex = state.dataCart.findIndex(
        item => item.pid === action.payload
      );
      if (existingItemIndex !== -1 && state.dataCart[existingItemIndex].qty > 1) {
        state.dataCart[existingItemIndex].qty--;
      }
    },
    updateDataCart(state, action) {
      state.dataCart = action.payload;
    },
    countTotal(state) {
      let temp = 0;
      state.dataCart.forEach((item) => {
        temp += item.qty * item.pprice;
      });
      // console.log("total",temp)
      state.total = temp;
    }
  },
});

export const {
  addDataCart,
  removeAllDataCart,
  removeData,
  incrementQty,
  decrementQty,
  updateDataCart,
  countTotal
} = cartSlice.actions;

export default cartSlice.reducer;
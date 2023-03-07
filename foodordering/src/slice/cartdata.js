import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  haveItems: false,
  items: [],
  totalitem: 0,
  cartprice: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    increment(state, action) {
      const newCart = action.payload;
      const existingItemPosition = state.items.findIndex((item) => {
        return item.foodname === newCart.foodname;
      });
      state.cartprice += newCart.foodprice;
      state.items[existingItemPosition].foodprice +=
        state.items[existingItemPosition].initialprice;
      state.totalitem++;
      state.items[existingItemPosition].foodquantity++;
    },
    decrement(state, action) {
      const newCart = action.payload;
      const existingItemPosition = state.items.findIndex(
        (item) => item.foodname === newCart.foodname
      );
      if (state.items[existingItemPosition].foodquantity === 1) {
        state.items.splice(existingItemPosition, 1);
        state.totalitem--;
        state.cartprice -= newCart.foodprice;
      } else {
        state.cartprice -= newCart.foodprice;
        state.totalitem--;
        state.items[existingItemPosition].foodquantity--;
        state.items[existingItemPosition].foodprice -=
          state.items[existingItemPosition].initialprice;
      }
    },
    deleteitem(state) {
      state.haveItems = false;
      state.items = [];
      state.totalitem = 0;
      state.cartprice = 0;
    },
    add(state, action) {
      const newCart = action.payload;
      const existingCart = state.items.find(
        (item) => item.foodname === newCart.foodname
      );
      state.cartprice += newCart.foodprice;
      state.totalitem++;
      if (!existingCart) {
        state.items.push(action.payload);
      } else {
        existingCart.foodquantity++;
        existingCart.foodprice += newCart.foodprice;
      }
    },
  },
});

export const { increment, decrement, deleteitem, add } = cartSlice.actions;
export default cartSlice.reducer;

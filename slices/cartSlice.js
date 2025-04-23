import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item._id == action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Sepette ekli olmayan ürün kaldırılamaz.");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = createSelector(
  [selectCartItems, (state, id) => id],
  (items, id) => items.filter((item) => item._id == id)
);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total = total + item.price), 0);

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;

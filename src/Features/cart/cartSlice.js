import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.asin === newItem.asin
      );

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.product_price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.product_price;
      }

      state.totalAmount += newItem.product_price;
      state.totalQuantity++;
    },
    incrementQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.asin === item.asin);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.product_price;
        state.totalAmount += item.product_price;
        state.totalQuantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.asin === item.asin);

      if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.product_price;
        state.totalAmount -= item.product_price;
        state.totalQuantity--;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((i) => i.asin !== item.asin);
        }
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter((i) => i.asin !== item.asin);
      state.totalAmount -= item.totalPrice;
      state.totalQuantity -= item.quantity;
    },
    loadCartItems: (state, action) => {
      state.items = action.payload;
      state.totalQuantity = action.payload.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = action.payload.reduce((total, item) => total + item.product_price * item.quantity, 0);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  loadCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
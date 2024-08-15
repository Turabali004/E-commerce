import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    saveOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    loadOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { saveOrder, loadOrders } = orderSlice.actions;
export default orderSlice.reducer;
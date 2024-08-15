import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "../Features/products/productSlice";
// import userReducer from "../Features/user/userSlice";
// import cartReducer from "../Features/cart/cartSlice";
// import orderReducer from '../Features/orders/orderSlice';

import productReducer from "../Features/products/productSlice"
import userReducer from "../Features/user/userSlice"
import cartReducer from "../Features/cart/cartSlice"
import orderReducer from "../Features/orders/orderSlice"
import { sliderSlice } from "../Features/slider/sliderSlide";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    slider : sliderSlice
  },
});
export default store;
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/products/productSlice"
import userReducer from "../Features/user/userSlice"
import cartReducer from "../Features/cart/cartSlice"
import orderReducer from "../Features/orders/orderSlice"
import { sliderSlice } from "../Features/slider/sliderSlide";
import userDataSlice from "../Features/viewers/userDataSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    slider : sliderSlice,
    userData: userDataSlice,
  },
});
export default store;
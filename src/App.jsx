

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  Layout,
  Cart,
  ProductListing,
  LandingPage,
  store,
  RegistrationForm,
  LoginForm,
  AdminPanel,
  ProductDetails,
  CheckoutForm,
  OrderHistory,
  PrivateRoute,
} from './index.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route
            path="product-listing"
            element={<PrivateRoute element={<ProductListing />} />}
          />
          <Route
            path="product/:productId"
            element={<PrivateRoute element={<ProductDetails />} />}
          />
          <Route
            path="checkout"
            element={<PrivateRoute element={<CheckoutForm />} />}
          />
          <Route
            path="order-history"
            element={<PrivateRoute element={<OrderHistory />} />}
          />
          <Route path="cart" element={<PrivateRoute element={<Cart />} />} />
          <Route
            path="admin-panel"
            element={<PrivateRoute element={<AdminPanel />} />}
          />
        </Route>
      </Routes>
  );
}

export default App;

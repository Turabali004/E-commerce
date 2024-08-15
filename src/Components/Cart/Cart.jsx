import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  loadCartItems,
} from "../../Features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        if (Array.isArray(parsedItems) && parsedItems.length > 0) {
          dispatch(loadCartItems(parsedItems));
        }
      } catch (e) {
        console.error("Failed to parse cart items from localStorage:", e);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-lg font-semibold">
              Total Items: {totalQuantity}
            </p>
            <p className="text-lg font-semibold">
              Total Amount: ${totalAmount}
            </p>
          </div>
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div
                key={item.asin}
                className="flex items-center bg-white shadow-md rounded-md p-4"
              >
                <img
                  src={item.product_photo}
                  alt={item.product_title}
                  className="w-24 h-24 object-contain rounded-md mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    {item.product_title}
                  </h2>
                  <p className="text-gray-700">Price: ${item.product_price}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item)}
                      className="bg-red-600 text-white px-2 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleCheckout}
            className="bg-orange-600 text-white px-4 py-2 rounded-md mt-6"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
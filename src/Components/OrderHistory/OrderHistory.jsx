import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadOrders } from "../../Features/orders/orderSlice";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    if (storedOrders.length > 0) {
      dispatch(loadOrders(storedOrders));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleCardClick = (order) => {
    setSelectedOrder(selectedOrder === order ? null : order);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleCardClick(order)}
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  Order #{index + 1}
                </h2>
                <p className="mb-1">
                  <strong>Name:</strong> {order.name}
                </p>
                <p className="mb-1">
                  <strong>Email:</strong> {order.email}
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> {order.address}
                </p>
                <p className="mb-1">
                  <strong>Full Name:</strong> {order.fullName}
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> {order.phone}
                </p>
                <p className="mb-1">
                  <strong>Total Items:</strong> {order.totalQuantity}
                </p>
                {selectedOrder === order ? (
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">Items:</h3>
                    <ul className="list-disc list-inside">
                      {order.items.map((item) => (
                        <li key={item.asin} className="mb-1">
                          {item.product_title} - ${item.product_price} x{" "}
                          {item.quantity}
                        </li>
                      ))}
                    </ul>
                    <p
                      className="mt-2 text-orange-500 cursor-pointer "
                      onClick={() => handleCardClick(order)}
                    >
                      Click to Collapse
                    </p>
                  </div>
                ) : (
                  <p
                    className="mt-2 text-orange-500 cursor-pointer "
                    onClick={() => handleCardClick(order)}
                  >
                    Click to Expand
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
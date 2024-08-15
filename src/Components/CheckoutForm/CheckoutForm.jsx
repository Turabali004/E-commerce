import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { saveOrder } from "../../Features/orders/orderSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    const orderData = {
      ...values,
      items: cartItems,
      totalAmount,
      totalQuantity,
      orderDate: new Date().toISOString(),
    };

    dispatch(saveOrder(orderData));

    navigate("/order-history");
    
    resetForm();
    setIsOrderPlaced(true);
  };


  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {isOrderPlaced ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your order has been placed successfully.
          </span>
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <div className="grid gap-6 mb-8">
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
                      <p className="text-gray-700">
                        Price: ${item.product_price}
                      </p>
                      <p className="text-gray-700">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isValid, isSubmitting }) => (
                  <Form className="grid gap-4 bg-white shadow-md rounded-md p-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-1">
                        Name
                      </label>
                      <Field
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="w-full border rounded-md p-2"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium mb-1">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border rounded-md p-2"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block font-medium mb-1"
                      >
                        Address
                      </label>
                      <Field
                        type="text"
                        id="address"
                        name="address"
                        className="w-full border rounded-md p-2"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-medium mb-1">
                        Phone
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full border rounded-md p-2"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      className="bg-orange-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-700  transition-transform transform hover:scale-105"
                    >
                      Place Order
                    </button>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
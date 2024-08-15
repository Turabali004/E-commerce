import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../Features/products/productSlice";
// import { addToCart } from "../../Features/cart/cartSlice";
import {addToCart} from "../../Features/cart/cartSlice"

import { TailSpin } from "react-loader-spinner";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails(productId));
    } else {
      console.error("Product ID is not available");
    }
  }, [dispatch, productId]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto mt-4"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-semibold text-gray-700">
          Product not found.
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
    setSuccessMessage("Product added to cart successfully!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-md mx-auto mb-4"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
        <img
          src={productDetails.product_photo}
          alt={productDetails.product_title}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg border"
        />
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {productDetails.product_title}
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            Price:{" "}
            <span className="text-orange-600">
              ${productDetails.product_price}
            </span>
          </p>
          {productDetails.product_original_price && (
            <p className="text-lg line-through text-gray-500 mb-2">
              Original Price: ${productDetails.product_original_price}
            </p>
          )}
          <p className="mt-4 text-gray-600">
            {productDetails.product_description}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
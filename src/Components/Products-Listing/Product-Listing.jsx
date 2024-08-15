import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../Features/products/productSlice";
import { TailSpin } from "react-loader-spinner";
import Slider from "../Slider/Slider";

const ProductListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [searchQuery, setSearchQuery] = useState("computer");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts({ query: searchQuery, page: 1 }));
    }
  }, [dispatch, searchQuery, status]);

  const handleSearch = () => {
    dispatch(fetchProducts({ query: searchQuery, page: 1 }));
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <Slider/> */}
      
      <h1 className="text-3xl font-bold mb-6 text-center">Product Listing</h1>
      
      {/* Search button and dropdown */}
      <div className="mb-8 flex justify-center items-center">
        <button
          onClick={toggleSearchBar}
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          {isSearchVisible ? "Hide Search" : "Show Search"}
        </button>
        {isSearchVisible && (
          <div className="relative w-2/3 mt-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Search
            </button>
          </div>
        )}
      </div>

      {/* Product grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.asin}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.product_photo}
                alt={product.product_title}
                className="w-full h-48 mb-4 rounded-md object-contain transition duration-300 ease-in-out transform hover:scale-110"
              />
              <h2 className="text-lg font-semibold mb-2">
                {product.product_title}
              </h2>
              <p className="text-lg font-bold">
                Price: {product.product_price}
              </p>
              {product.product_original_price && (
                <p className="text-sm line-through text-gray-500">
                  Original Price: {product.product_original_price}
                </p>
              )}
              <button
                onClick={() => navigate(`/product/${product.asin}`)}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;

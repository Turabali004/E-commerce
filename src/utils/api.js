import axios from "axios";

const RAPIDAPI_HOST = "real-time-amazon-data.p.rapidapi.com";
const RAPIDAPI_KEY = "ebdaf71f5dmsh22aa38d29463840p119d5ajsn4e444afebbb6";

const apiClient = axios.create({
  baseURL: `https://${RAPIDAPI_HOST}`,
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": RAPIDAPI_HOST,
    "x-rapidapi-key": RAPIDAPI_KEY,
  },
});

export const fetchProductsBySearch = async (
  query,
  page = 1,
  country = "US"
) => {
  try {
    const response = await apiClient.get("/search", {
      params: {
        query,
        page,
        country,
        sort_by: "RELEVANCE",
        product_condition: "ALL",
        is_prime: "false",
      },
    });
    return {
      products: response.data.data.products,
    };
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch products"
    );
  }
};

export const getProductById = async (asin) => {
  try {
    const response = await apiClient.get("/product-details", {
      params: {
        asin,
        country: "US",
      },
    });
    console.log("Product details:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching product details:",
      error.response ? error.response.data : error.message
    );
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Failed to fetch product details"
    );
  }
};
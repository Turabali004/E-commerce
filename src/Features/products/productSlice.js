import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsBySearch, getProductById } from "../../utils/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const response = await fetchProductsBySearch(query, page);
      return response.products; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await getProductById(productId);
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    productDetails : null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
// src/features/userData/userDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch user data from an API
export const fetchUserData = createAsyncThunk(
  'userData/fetchUserData',
  async () => {
    const response = await axios.get('https://randomuser.me/api/');
    console.log(response);
    
    return response.data.results[0]; // Assuming the API returns an array with a single user object
  }
);

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; 
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userDataSlice.reducer;

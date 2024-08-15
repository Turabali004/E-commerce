import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async () => {
      const response = await axios.get('https://randomuser.me/api/');
      return response.data.results[0];
    }
  );
  


const usersSlice = createSlice({
    name: 'user',
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
          })
        },
        })
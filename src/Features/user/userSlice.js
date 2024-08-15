import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        error: null,
    },
    reducers: {
        registerUser(state, action) {
            state.userInfo = action.payload;
        },
        loginUser(state, action) {
            state.userInfo = action.payload;
        },
        logoutUser(state) {
            state.userInfo = null;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { registerUser, loginUser, logoutUser, setError } = userSlice.actions;
export default userSlice.reducer;
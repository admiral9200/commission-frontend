import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/auth";

export const authSlice = createSlice({
    name: "user",
    initialState: {
        isRegistered: false,
        isLoggedIn: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state) => {
                state.isRegistered = true;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                if(action.payload) {
                    state.isLoggedIn = true;
                }
            })
    }
});

export default authSlice.reducer;
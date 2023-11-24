import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseURL } from "../../config";

const signUp = createAsyncThunk(
    'auth/signUp',
    async (params) => {
        try {
            const res = await axios.post(`${BaseURL}/auth/sign-up`, params);
            console.log(res.data);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
)

const signIn = createAsyncThunk(
    'auth/signIn',
    async (params) => {
        try {
            const res = await axios.post(`${BaseURL}/auth/sign-in`, params);
            if(res.status === 200) {
                return res.data;
            }
        } catch (error) {
            
        }
    }
)

export { signUp, signIn };
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../config";

const createSale = createAsyncThunk(
    'sales/create',
    async (params) => {
        try {
            const res = await axios.post(`${BaseURL}/sales/create`, params);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
)

const getAllSales = createAsyncThunk(
    'sales/get',
    async () => {
        try {
            const res = await axios.get(`${BaseURL}/sales/get-all-sales`);
            console.log(res.data.sales)
            return res.data.sales;
        } catch (error) {
            throw error;
        }
    }
)

export { createSale, getAllSales };
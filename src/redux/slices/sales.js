import { createSlice } from "@reduxjs/toolkit";
import { createSale, getAllSales } from "../actions/sales";

export const salesSlice = createSlice({
    name: "sales",
    initialState: {
        sales: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createSale.fulfilled, (state, action) => {
                // state.sales.push(action.payload);
            })
            .addCase(getAllSales.fulfilled, (state, action) => {
                state.sales = action.payload;
            })
    }
});

export default salesSlice.reducer;
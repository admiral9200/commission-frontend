import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../slices/auth";
import routeSlice from "../slices/route";
import salesSlice from "../slices/sales";

const rootReducer = {
    auth: authSlice,
    route: routeSlice,
    sales: salesSlice
}

export default configureStore({
    reducer: rootReducer
});
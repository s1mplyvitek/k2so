import { configureStore, } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import dishSlice from "./slices/dishSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        dish: dishSlice,
    },
    
});
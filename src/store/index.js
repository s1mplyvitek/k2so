import { configureStore, } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import dishSlice from "./slices/dishSlice";
import axios from "axios";

// axios("/data/menu.json").then((res) => console.log(res));
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        dish: dishSlice,
    },
    
});
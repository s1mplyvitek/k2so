import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartStorageString = localStorage.getItem("cart");

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartStorageString
    ? JSON.parse(cartStorageString)
    : initialState,
        
    reducers: {
        addToCart: (state, action) => {
            let itemToAdd = action.payload;
            let index = state.findIndex(
                (item) => item.food.id === itemToAdd.id
            );
            if (index >=0) {
                state[index].qty++;
            } else {
                state.push({qty: 1, food: itemToAdd});
            }
        },
        clearCart: (state) => {
            state.length = 0;           
        },
    }
});

export const { addToCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
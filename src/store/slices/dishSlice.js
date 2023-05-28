import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = { items: [], loading: "start" };

export const loadDish = createAsyncThunk(
    "menu/getMenu",
    async () => {
        return axios
            .get("/data/menu.json")
            .then((res) => res.data)
    }
);

export const dishSlice = createSlice({
    name: "dish",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadDish.fulfilled, (state, action) => {
            state.loading = "fulfilled";
            state.items.length = 0;
            state.items.push(...action.payload);
        });
        builder.addCase(loadDish.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(loadDish.rejected, (state, action) => {
            state.loading = "rejected";
        });
    },
});

export default dishSlice.reducer;
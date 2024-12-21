import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlicereducer from './slice/slice'
export const store=configureStore({
    reducer:{
        cart:cartSlicereducer,
    }
})
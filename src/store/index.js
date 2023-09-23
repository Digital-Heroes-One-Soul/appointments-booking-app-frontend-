
import { configureStore } from "@reduxjs/toolkit";
import  emporiums from './emporiumsSlice'



export const store = configureStore({

    reducer:{emporiums}
})
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice";

const store = configureStore({
    reducer: {
        bookReducer: bookReducer
    }
})

export default store;
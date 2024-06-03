import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { bookReducer } from "./bookSlice";
export const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
    bookSlice: bookReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increase(state, action) {
      state.count++;
    },
    decrease(state, action) {
      state.count--;
    },
  },
});

export const counterReducer = counterslice.reducer;
export const counterActions = counterslice.actions;

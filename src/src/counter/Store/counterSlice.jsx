import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    showdata: (state) => {
      state.value = state.value;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
    decrementByValue: (state, action) => {
      state.value -= action.payload;
    },
    reset:(state)=>{
      state.value=0;

    },
  },
});

export const {
  showdata,
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;

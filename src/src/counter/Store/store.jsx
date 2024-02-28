import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../Store/counterSlice";

export const store = configureStore({
  reducer: {
    show: showReducer,
  },
});

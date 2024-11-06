import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./authUserSlice";
import todoListSlice from "./todoListSlice";
const store = configureStore({
  reducer: {
    user: authUserSlice,
    todo: todoListSlice,
  },
});

export default store;

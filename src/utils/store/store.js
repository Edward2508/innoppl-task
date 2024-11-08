import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./authUserSlice";
import todoListSlice from "./todoListSlice";
import skillsSlice from "./skillsSlice";
const store = configureStore({
  reducer: {
    user: authUserSlice,
    todo: todoListSlice,
    skills: skillsSlice,
  },
});

export default store;

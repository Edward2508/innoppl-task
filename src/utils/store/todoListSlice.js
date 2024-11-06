import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todo",
  initialState: {
    todolist: [],
  },
  reducers: {
    addtodolist: (state, action) => {
      state.todolist.push(action.payload);
    },
  },
});

export const { addtodolist } = todoListSlice.actions;
export default todoListSlice.reducer;

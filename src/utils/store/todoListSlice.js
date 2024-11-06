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
    removeList: (state) => {
      state.todolist.pop();
    },
  },
});

export const { addtodolist, removeList } = todoListSlice.actions;
export default todoListSlice.reducer;

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
    removeList: (state, action) => {
      state.todolist.splice(action.payload, 1);
    },
    updateTask: (state, action) => {
      const { index, newTask } = action.payload;
      state.todolist[index] = newTask;
    },
  },
});

export const { addtodolist, removeList, updateTask } = todoListSlice.actions;
export default todoListSlice.reducer;

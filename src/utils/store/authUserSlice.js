import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "user",
  initialState: {
    details: [],
  },
  reducers: {
    userDetails: (state, action) => {
      const existingUserIndex = state.details.findIndex(
        (user) => user.id === action.payload.id
      );

      if (existingUserIndex !== -1) {
        state.details[existingUserIndex] = action.payload;
      } else {
        state.details.push(action.payload);
      }
    },
    logout: (state) => {
      state.details = [];
    },
  },
});

export const { userDetails, logout } = authUserSlice.actions;
export default authUserSlice.reducer;

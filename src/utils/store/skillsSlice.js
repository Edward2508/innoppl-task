import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    skillsList: [],
  },
  reducers: {
    addSkills: (state, action) => {
      state.skillsList.push(action.payload);
    },
    updateSkills: (state, action) => {
      const { index, skills } = action.payload;
      state.skillsList[index] = skills;
    },
    removeSkills: (state, action) => {
      state.skillsList.splice(action.payload, 1);
    },
    clearSkills: (state) => {
      state.skillsList = [];
    },
  },
});

export const { addSkills, updateSkills, removeSkills, clearSkills } =
  skillsSlice.actions;
export default skillsSlice.reducer;

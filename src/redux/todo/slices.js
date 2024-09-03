import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add_todo: (state, action) => {
      state.push(action.payload);
    },
    remove_todo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { add_todo, remove_todo } = todoSlice.actions;
export default todoSlice.reducer;

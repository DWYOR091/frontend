import { createSlice } from "@reduxjs/toolkit";

const auth = localStorage.getItem("auth");
const authSlice = createSlice({
  name: "auth",
  initialState: auth ? JSON.parse(auth) : { token: null, role: null },
  reducers: {
    user_login: (state, action) => {
      (state.token = action.payload.token), (state.role = action.payload.role);
      localStorage.setItem("auth", JSON.stringify(state));
    },
    user_logout: (state) => {
      (state.token = null), (state.role = null);
      localStorage.removeItem("auth");
    },
  },
});

export const { user_login, user_logout } = authSlice.actions;
export default authSlice.reducer;

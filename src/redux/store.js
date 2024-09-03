import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/slices";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  console.log("store change: ", store.getState());
});
export default store;

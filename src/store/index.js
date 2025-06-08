import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";

const store = configureStore({
  reducer: {
    member: memberReducer,
  },
});

export default store;

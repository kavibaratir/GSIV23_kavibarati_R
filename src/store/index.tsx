import { configureStore } from "@reduxjs/toolkit";
import search from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    searchData: search
    // ...other reducers if you have them
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

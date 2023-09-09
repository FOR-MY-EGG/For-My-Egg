import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./reducer.js";

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export default store;
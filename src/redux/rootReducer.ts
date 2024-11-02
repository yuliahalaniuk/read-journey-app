import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [authSlice.name]: persistReducer(
    {
      key: "auth",
      storage,
    },
    authSlice.reducer
  ),
});

export type RootReducerType = typeof rootReducer;

export default rootReducer;

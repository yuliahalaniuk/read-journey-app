import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { librarySlice } from "./library/library.slice";
import { booksSlice } from "./books/books.slice";

const rootReducer = combineReducers({
  [authSlice.name]: persistReducer(
    {
      key: "auth",
      storage,
    },
    authSlice.reducer
  ),
  [librarySlice.name]: persistReducer(
    {
      key: "library",
      storage,
    },
    librarySlice.reducer
  ),
  [booksSlice.name]: persistReducer(
    {
      key: "books",
      storage,
    },
    booksSlice.reducer
  ),
});

export type RootReducerType = typeof rootReducer;

export default rootReducer;

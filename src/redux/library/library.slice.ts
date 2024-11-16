import { createSlice } from "@reduxjs/toolkit";
import {
  addOneThunk,
  addReadingSessionThunk,
  deleteAllThunk,
  deleteOneThunk,
  filterByGenreThunk,
  getAllThunk,
  getOneThunk,
} from "./library.thunks";
import { BookEntity } from "../../types/books";

export interface LibraryState {
  books: BookEntity[];
  filteredBooks: BookEntity[];
  currentBook: any | null; //UserBookData
}

const initialState: LibraryState = {
  books: [],
  filteredBooks: [],
  currentBook: null,
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllThunk.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.books = action.payload;
        state.filteredBooks = action.payload;
      })
      .addCase(filterByGenreThunk.fulfilled, (state, action) => {
        state.filteredBooks = action.payload;
      })
      .addCase(addOneThunk.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(getOneThunk.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      })
      .addCase(deleteOneThunk.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteAllThunk.fulfilled, (state) => {
        state.books = [];
        state.filteredBooks = [];
      })
      .addCase(addReadingSessionThunk.fulfilled, (state, action) => {
        state.currentBook = {
          ...state.currentBook,
          totalRead: action.payload.totalRead,
          sessions: action.payload.sessions,
        };
      })
      .addCase(addReadingSessionThunk.rejected, (state, action) => {
        state.currentBook =
          action.error.message || "Failed to update reading data";
      });
  },
});

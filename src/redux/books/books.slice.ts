import { createSlice } from "@reduxjs/toolkit";
import { BookEntity } from "../../types/books";
import { getAllBooksThunk, getRecommendedThunk } from "./books.thunks";

export interface BooksState {
  books: BookEntity[];
  recommended: BookEntity[];
  error: string | null;
  loading: boolean;
}

const initialState: BooksState = {
  books: [],
  recommended: [],
  loading: false,
  error: null,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooksThunk.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(getAllBooksThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBooksThunk.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch books";
        state.loading = false;
      })
      .addCase(getRecommendedThunk.fulfilled, (state, action) => {
        state.recommended = action.payload;
      });
  },
});

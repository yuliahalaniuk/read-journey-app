import { createSlice } from "@reduxjs/toolkit";
import {
  addOneThunk,
  addReadingSessionThunk,
  deleteAllThunk,
  deleteOneThunk,
  deleteSessionThunk,
  filterByGenreThunk,
  getAllThunk,
  getOneThunk,
} from "./library.thunks";
import { BookEntity } from "../../types/books";

export interface LibraryState {
  books: BookEntity[];
  filteredBooks: BookEntity[];
  currentBook: any | null;
  stats: {};
}

const initialState: LibraryState = {
  books: [],
  filteredBooks: [],
  currentBook: null,
  stats: {},
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
      .addCase(deleteSessionThunk.fulfilled, (state, action) => {
        const { date, sessionId } = action.payload;

        if (state.currentBook?.sessions) {
          const dateSessions = state.currentBook.sessions[date];
          if (dateSessions) {
            delete dateSessions[sessionId];

            if (Object.keys(dateSessions).length === 0) {
              delete state.currentBook.sessions[date];
            }

            // Recalculate totalRead if needed
            const totalRead = Object.values(state.currentBook.sessions).reduce(
              (total: number, sessionMap: any) =>
                total +
                Object.values(sessionMap).reduce(
                  (sessionTotal: number, session: any) =>
                    sessionTotal + session.pagesRead,
                  0
                ),
              0
            );
            state.currentBook.totalRead = totalRead;
          }
        }
      })

      .addCase(addReadingSessionThunk.rejected, (state, action) => {
        state.currentBook =
          action.error.message || "Failed to update reading data";
      });
  },
});

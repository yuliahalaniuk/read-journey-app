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
import { toast } from "react-toastify";

export interface LibraryState {
  books: BookEntity[];
  filteredBooks: BookEntity[];
  currentBook: {
    info: BookEntity | null;
    totalRead: number;
    sessions: Record<string, Record<string, { pagesRead: number }>>;
  };
  stats: {};
}

const initialState: LibraryState = {
  books: [],
  filteredBooks: [],
  currentBook: {
    info: null,
    totalRead: 0,
    sessions: {},
  },
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


        state.books = action.payload as any;
        state.filteredBooks = action.payload as any;
      })
      .addCase(filterByGenreThunk.fulfilled, (state, action) => {
        state.filteredBooks = action.payload;
      })
      .addCase(addOneThunk.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(getOneThunk.fulfilled, (state, action) => {
        console.log("in getOne", action.payload);
        
        state.currentBook = {
          ...state.currentBook,
          info: action.payload,
        };
      })
      .addCase(deleteOneThunk.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteAllThunk.fulfilled, (state) => {
        state.books = [];
        state.filteredBooks = [];
      })
      .addCase(addReadingSessionThunk.fulfilled, (state, action) => {
        state.currentBook.totalRead = action.payload.totalRead;
        state.currentBook.sessions = action.payload.sessions;
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
        toast.error("Failed to update reading data");
      });
  },
});

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
  loading: boolean;
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
  loading: false,
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllThunk.fulfilled, (state, action) => {
        state.books = action.payload as any;
        state.filteredBooks = action.payload as any;
        state.loading = false;
      })
      .addCase(filterByGenreThunk.fulfilled, (state, action) => {
        state.filteredBooks = action.payload;
        state.loading = false;
      })
      .addCase(addOneThunk.fulfilled, (state, action) => {
        state.books.push(action.payload);
        state.loading = false;
      })
      .addCase(getOneThunk.fulfilled, (state, action) => {
        state.currentBook = {
          ...state.currentBook,
          info: action.payload,
        };
        state.loading = false;
      })
      .addCase(deleteOneThunk.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
        state.loading = false;
        toast.success("The book was deleted successfully");
      })
      .addCase(deleteAllThunk.fulfilled, (state) => {
        state.books = [];
        state.filteredBooks = [];
        state.loading = false;
      })
      .addCase(addReadingSessionThunk.fulfilled, (state, action) => {
        state.currentBook.totalRead = action.payload.totalRead;
        state.currentBook.sessions = action.payload.sessions;
        state.loading = false;
      })
      .addCase(deleteSessionThunk.fulfilled, (state, action) => {
        updateSession(state, action.payload);
      })
      .addCase(addReadingSessionThunk.rejected, (state, action) => {
        toast.error("Failed to update reading data");
        state.loading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      );
  },
});

function updateSession(
  state: LibraryState,
  payload: { date: string; sessionId: string }
) {
  const { date, sessionId } = payload;

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

  state.loading = false;
}
import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase/firebase";
import { get, onValue, push, ref, remove, set } from "firebase/database";
import { BookEntity } from "../../types/books";
import { RootState } from "../store";

export const getAllThunk = createAsyncThunk(
  "library/getAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const userId = state?.auth?.user?.uid;

      const userBooksRef = ref(database, `books/${userId}`);

      return new Promise<BookEntity[]>((resolve) => {
        onValue(userBooksRef, (snapshot) => {
          const data = snapshot.val();
          const booksArray: BookEntity[] = data ? Object.values(data) : [];
          console.log("booksArray", booksArray);
          resolve(booksArray);
        });
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOneThunk = createAsyncThunk(
  "library/getOne",
  async ({ bookId }: { bookId?: string }, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const userId = state?.auth?.user?.uid;

      const userBookRef = ref(database, `books/${userId}/${bookId}`);

      return new Promise<BookEntity>((resolve) => {
        onValue(userBookRef, (snapshot) => {
          const data = snapshot.val();
          console.log("booksArray", data);
          resolve(data);
        });
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }

  // const controller = new AbortController();
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       // `https://freetestapi.com/api/v1/books/${bookId}`,
  //       `https://www.googleapis.com/books/v1/volumes/${bookId}`,
  //       {
  //         // signal: controller.signal,
  //       }
  //     );
  //     const data = await response.json();
  //     console.log("data", data);
  //     setBook(data);
  //   } catch (e: { name: string } | any) {
  //     if (e.name !== "AbortError") {
  //       console.error("Error", e);
  //     }
  //   }
  // };

  // fetchData();
);

export const filterByGenreThunk = createAsyncThunk(
  "library/filterByGenre",
  async ({ genre }: { genre: string }, { getState }) => {
    const { books } = (getState() as any).books;
    if (genre === "all") return books;
    return books.filter((book: BookEntity) =>
      book?.volumeInfo?.categories?.includes(genre)
    );
  }
);

export const addOneThunk = createAsyncThunk(
  "library/addOne",
  async ({ book }: { book: BookEntity }, { getState }) => {
    const state = getState() as RootState;
    const userId = state?.auth?.user?.uid;

    const booksRef = ref(database, `books/${userId}/${book.id}`);
    await set(booksRef, book);
    return book;
  }
);

export const deleteOneThunk = createAsyncThunk(
  "library/deleteOne",
  async (
    { userId, bookId }: { userId?: string; bookId?: string },
    { getState }
  ) => {
    const bookRef = ref(database, `books/${userId}/${bookId}`);
    await remove(bookRef);
    return bookId;
  }
);

export const deleteAllThunk = createAsyncThunk(
  "library/deleteAll",
  async ({ userId }: { userId?: string }, { rejectWithValue }) => {
    const booksRef = ref(database, `books/${userId}`);
    try {
      await remove(booksRef);
      return true;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addReadingSessionThunk = createAsyncThunk(
  "library/addReadingSession",
  async (
    {
      userId,
      bookId,
      pagesRead,
      startTime,
    }: {
      userId: string;
      bookId: string;
      pagesRead: number;
      startTime: number;
    },
    { rejectWithValue }
  ) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const readingRef = ref(database, `users/${userId}/stats/${bookId}`);
    const sessionDuration = Math.floor((Date.now() - startTime) / 1000);

    try {
      const snapshot = await get(readingRef);
      const bookData = snapshot.exists()
        ? snapshot.val()
        : { totalRead: 0, sessions: {} };

      const newSession = {
        pagesRead: bookData.totalRead + pagesRead,
        startTime,
        endTime: Date.now(),
        duration: sessionDuration,
      };

      const updatedTotalRead = bookData.totalRead + pagesRead;
      const updatedSessions = {
        ...bookData.sessions,
        [currentDate]: {
          ...(bookData.sessions[currentDate] || {}),
          [push(ref(database, `users/${userId}/stats/${bookId}/sessions`))
            .key as any]: newSession,
        },
      };

      await set(readingRef, {
        totalRead: updatedTotalRead,
        sessions: updatedSessions,
      });

      return { totalRead: updatedTotalRead, sessions: updatedSessions };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

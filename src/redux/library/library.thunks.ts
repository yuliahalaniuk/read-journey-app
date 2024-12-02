import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase/firebase";
import { get, push, ref, remove, set } from "firebase/database";
import { BookEntity } from "../../types/books";
import { RootState } from "../store";

export const getAllThunk = createAsyncThunk(
  "library/getAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const userId = state?.auth?.user?.uid;

      const userBooksRef = ref(database, `books/${userId}`);

      // return new Promise<BookEntity[]>((resolve) => {
      //   onValue(userBooksRef, (snapshot) => {
      //     const data = snapshot.val();
      //     const booksArray: BookEntity[] = data ? Object.values(data) : [];
      //     resolve(booksArray);
      //   });
      // });

      const snapshot = await get(userBooksRef);
      const data = snapshot.val();
      return data ? Object.values(data) : [];
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

      if (!userId || !bookId) {
        throw new Error("User ID or Book ID is missing.");
      }

      const userBookRef = ref(database, `books/${userId}/${bookId}`);
      const snapshot = await get(userBookRef);

      if (!snapshot.exists()) {
        throw new Error("Book not found.");
      }

      const book = snapshot.val();

      return book as BookEntity;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : String(error)
      );
    }
  }
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

// export const addReadingSessionThunk = createAsyncThunk(
//   "library/addReadingSession",
//   async (
//     {
//       bookId,
//       pagesRead,
//       startTime,
//     }: {
//       bookId: string;
//       pagesRead: number;
//       startTime: number;
//     },
//     { rejectWithValue, getState }
//   ) => {
//     const state = getState() as RootState;
//     const userId = state?.auth?.user?.uid;

//     const currentDate = new Date().toISOString().split("T")[0];
//     const readingRef = ref(database, `users/${userId}/stats/${bookId}`);
//     const sessionDuration = Math.floor((Date.now() - startTime) / 1000);

//     try {
//       const snapshot = await get(readingRef);
//       const bookData = snapshot.exists()
//         ? snapshot.val()
//         : { totalRead: 0, sessions: {} };

//       const newSession = {
//         pagesRead: pagesRead,
//         startTime,
//         endTime: Date.now(),
//         duration: sessionDuration,
//       };

//       const updatedTotalRead = bookData.totalRead + pagesRead;
//       const updatedSessions = {
//         ...bookData.sessions,
//         [currentDate]: {
//           ...(bookData.sessions[currentDate] || {}),
//           [push(ref(database, `users/${userId}/stats/${bookId}/sessions`))
//             .key as any]: newSession,
//         },
//       };

//       await set(readingRef, {
//         totalRead: updatedTotalRead,
//         sessions: updatedSessions,
//       });

//       return { totalRead: updatedTotalRead, sessions: updatedSessions };
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const addReadingSessionThunk = createAsyncThunk(
  "library/addReadingSession",
  async (
    {
      bookId,
      pagesRead,
      startTime,
    }: {
      bookId: string;
      pagesRead: number;
      startTime: number;
    },
    { rejectWithValue, getState }
  ) => {
    const state = getState() as RootState;
    const userId = state?.auth?.user?.uid;

    const currentDate = new Date().toISOString().split("T")[0];
    const readingRef = ref(database, `users/${userId}/stats/${bookId}`);
    const sessionDuration = Math.floor((Date.now() - startTime) / 1000);

    try {
      const snapshot = await get(readingRef);
      const bookData = snapshot.exists()
        ? snapshot.val()
        : { totalRead: 0, sessions: {} };

      const newSession = {
        pagesRead: pagesRead,
        startTime,
        endTime: Date.now(),
        duration: sessionDuration,
      };

      const updatedTotalRead = bookData.totalRead + pagesRead;
      const updatedSessions = {
        ...(bookData.sessions || {}), // Handle undefined sessions
        [currentDate]: {
          ...(bookData.sessions?.[currentDate] || {}), // Handle undefined date
          [push(ref(database, `users/${userId}/stats/${bookId}/sessions`))
            .key!]: newSession,
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


export const deleteSessionThunk = createAsyncThunk(
  "library/deleteSession",
  async (
    {
      bookId,
      date,
      sessionId,
    }: {
      bookId?: string;
      date: string;
      sessionId: string;
    },
    { rejectWithValue, getState }
  ) => {
    const state = getState() as RootState;
    const userId = state?.auth?.user?.uid;

    try {
      const sessionRef = ref(
        database,
        `users/${userId}/stats/${bookId}/sessions/${date}/${sessionId}`
      );

      const sessionSnapshot = await get(sessionRef);
      if (!sessionSnapshot.exists()) {
        throw new Error("Session not found");
      }

      const sessionData = sessionSnapshot.val();
      const pagesRead = sessionData.pagesRead || 0;

      await remove(sessionRef);

      const bookStatsRef = ref(database, `users/${userId}/stats/${bookId}`);
      const bookStatsSnapshot = await get(bookStatsRef);
      if (!bookStatsSnapshot.exists()) {
        throw new Error("Book stats not found");
      }

      const bookStats = bookStatsSnapshot.val();
      const updatedTotalRead = Math.max(
        (bookStats.totalRead || 0) - pagesRead,
        0
      );

      await set(bookStatsRef, {
        ...bookStats,
        totalRead: updatedTotalRead,
      });

      return { bookId, date, sessionId, updatedTotalRead };
    } catch (error) {
      console.error("Error deleting session:", error);
      return rejectWithValue(error);
    }
  }
);

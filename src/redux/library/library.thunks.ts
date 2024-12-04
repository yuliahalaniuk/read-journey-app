import { createThunkWithCallbacks } from "../../utils/createThunkWithCallbacks";
import { database } from "../../firebase/firebase";
import { get, push, ref, remove, set } from "firebase/database";
import { BookEntity } from "../../types/books";
import { RootState } from "../store";

export const getAllThunk = createThunkWithCallbacks(
  "library/getAll",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const userId = state.auth?.user?.uid;

    const userBooksRef = ref(database, `books/${userId}`);
    const snapshot = await get(userBooksRef);
    const data = snapshot.val();
    return data ? Object.values(data) : [];
  }
);

export const getOneThunk = createThunkWithCallbacks(
  "library/getOne",
  async ({ bookId }: { bookId?: string }, { getState }) => {
    const state = getState() as RootState;
    const userId = state.auth?.user?.uid;

    if (!userId || !bookId) {
      throw new Error("User ID or Book ID is missing.");
    }

    const userBookRef = ref(database, `books/${userId}/${bookId}`);
    const snapshot = await get(userBookRef);

    if (!snapshot.exists()) {
      throw new Error("Book not found.");
    }
    const book = snapshot.val() as BookEntity;

    const userBooksRef = ref(database, `users/${userId}/stats/${bookId}`);
    const statsSnapshot = await get(userBooksRef);
    const stats = statsSnapshot.val();

    return { book, stats };
  }
);

export const addOneThunk = createThunkWithCallbacks(
  "library/addOne",
  async ({ book }: { book: BookEntity }, { getState }) => {
    const state = getState() as RootState;
    const userId = state.auth?.user?.uid;

    const booksRef = ref(database, `books/${userId}/${book.id}`);
    await set(booksRef, book);
    return book;
  }
);

export const deleteOneThunk = createThunkWithCallbacks(
  "library/deleteOne",
  async (
    { userId, bookId }: { userId?: string; bookId?: string },
    { getState }
  ) => {
    const state = getState() as RootState;
    const currentUserId = userId || state.auth?.user?.uid;

    if (!currentUserId || !bookId) {
      throw new Error("User ID or Book ID is missing.");
    }

    const bookRef = ref(database, `books/${currentUserId}/${bookId}`);
    const statsRef = ref(database, `users/${currentUserId}/stats/${bookId}`);

    await Promise.all([remove(bookRef), remove(statsRef)]);

    return bookId;
  }
);

export const addReadingSessionThunk = createThunkWithCallbacks(
  "library/addReadingSession",
  async (
    {
      bookId,
      pagesRead,
      startTime,
    }: { bookId: string; pagesRead: number; startTime: number },
    { getState }
  ) => {
    const state = getState() as RootState;
    const userId = state.auth?.user?.uid;

    const currentDate = new Date().toISOString().split("T")[0];
    const readingRef = ref(database, `users/${userId}/stats/${bookId}`);
    const sessionDuration = Math.floor((Date.now() - startTime) / 1000);

    const snapshot = await get(readingRef);
    const bookData = snapshot.exists()
      ? snapshot.val()
      : { totalRead: 0, sessions: {} };

    const newSession = {
      pagesRead,
      startTime,
      endTime: Date.now(),
      duration: sessionDuration,
    };

    const updatedTotalRead = bookData.totalRead + pagesRead;
    const updatedSessions = {
      ...(bookData.sessions || {}),
      [currentDate]: {
        ...(bookData.sessions?.[currentDate] || {}),
        [push(ref(database, `users/${userId}/stats/${bookId}/sessions`)).key!]:
          newSession,
      },
    };

    await set(readingRef, {
      totalRead: updatedTotalRead,
      sessions: updatedSessions,
    });

    return { totalRead: updatedTotalRead, sessions: updatedSessions };
  }
);

export const deleteSessionThunk = createThunkWithCallbacks(
  "library/deleteSession",
  async (
    {
      bookId,
      date,
      sessionId,
    }: { bookId?: string; date: string; sessionId: string },
    { getState }
  ) => {
    const state = getState() as RootState;
    const userId = state.auth?.user?.uid;

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
  }
);

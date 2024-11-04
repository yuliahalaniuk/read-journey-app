import { useSelector } from "react-redux";
import { RootState } from "./store";
import { AuthState } from "./auth/auth.slice";
import { LibraryState } from "./library/library.slice";
import { BooksState } from "./books/books.slice";

export const useAuthSelector = (): AuthState =>
  useSelector((s: RootState) => s.auth);

export const useLibrarySelector = (): LibraryState =>
  useSelector((s: RootState) => s.library);

export const useBooksSelector = (): BooksState =>
  useSelector((s: RootState) => s.books);
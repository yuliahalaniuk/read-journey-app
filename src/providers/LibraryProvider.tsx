import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { BookEntity, LS_BOOK_KEY } from "../types/books";
import { ref, onValue, set, push, remove } from "firebase/database";
import { database } from "../firebase/firebase";
import { useAuth } from "./AuthProvider";

interface LibraryCtxProps {
  books: BookEntity[];
  addBook: (book: BookEntity) => void;
  deleteBook: (bookId?: number) => void;
  deleteAllBooks: () => void;
  filteredBooks: BookEntity[];
  filterBooks: (genre: string) => void;
}
const userId = "iMGF4aVTmyOJgdqJLpY5mnv9HY92";
const LibraryCtx = createContext<LibraryCtxProps | undefined>(undefined);

function writeBooksData(userId: string, book: BookEntity) {
  const userBooksRef = ref(database, `books/${"iMGF4aVTmyOJgdqJLpY5mnv9HY92"}`);
  const newPostRef = push(userBooksRef);
  set(newPostRef, book);
}

export const LibraryProvider = ({ children }: { children?: ReactNode }) => {
  const [books, setBooks] = useState<BookEntity[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookEntity[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // if (user) {
    const userBooksRef = ref(database, `books/${userId}`);

    onValue(userBooksRef, (snapshot) => {
      const data = snapshot.val();
      const booksArray: BookEntity[] = data ? Object.values(data) : []; // Convert Firebase object to an array
      setBooks(booksArray);
      setFilteredBooks(booksArray);
    });
    // }
  }, []);

  console.log("filteredBooks", filteredBooks);
  // useEffect(() => {
  //   if (Array.isArray(books)) {
  //     localStorage.setItem(LS_BOOK_KEY, JSON.stringify(books));
  //   }
  // }, [books]);

  const filterBooks = (genre: string) => {
    console.log("genre", genre);
    if (genre === "all") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) => book?.genre?.includes(genre));
      setFilteredBooks(filtered);
    }
  };

  const addBook = (book: BookEntity) => {
    if (!Array.isArray(books)) {
      setBooks([book]);
    } else {
      const updatedBooks = [...books, book];
      setBooks(updatedBooks);
    }

    // if (user) {
    writeBooksData(userId, book);
    // }
  };

  const deleteBook = (bookId?: number) => {
    setBooks((prev) => {
      return prev.filter((x) => x.id !== bookId);
    });
  };

  const deleteAllBooks = () => {
    const booksRef = ref(database, `books/${userId}`);
    remove(booksRef)
      .then(() => {
        console.log("All books deleted successfully");
        setBooks([]);
        localStorage.removeItem(LS_BOOK_KEY);
      })
      .catch((error) => {
        console.error("Error deleting books: ", error);
      });
  };

  return (
    <LibraryCtx.Provider
      value={{
        books,
        addBook,
        filteredBooks,
        deleteBook,
        deleteAllBooks,
        filterBooks,
      }}
    >
      {children}
    </LibraryCtx.Provider>
  );
};

export const useLibrary = () => {
  const ctx = useContext(LibraryCtx);

  if (!ctx) {
    throw new Error("useLibrary must be used within a LibraryProvider");
  }

  return ctx;
};

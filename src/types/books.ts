import { SessionEntity } from "./stats";

export interface BookEntity {
  id?: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
    categories?: string[];
    publication_year?: number;
    pageCount?: number;
  };
}

export interface UserBookData extends HasSessions {
  totalRead: number;
}

export interface HasSessions {
  sessions: Record<string, Record<BookId, SessionEntity>>;
}

export type BookId = string;

export const LS_BOOK_KEY = "read_app_books";

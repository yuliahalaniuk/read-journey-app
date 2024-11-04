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

export interface UserBookData {
  totalRead: number;
  sessions: SessionEntity[];
}

export interface SessionEntity {}

export const LS_BOOK_KEY = "read_app_books";
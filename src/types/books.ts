export interface BookEntity {
  id?: number;
  title?: string;
  author?: string;
  description?: string;
  cover_image?: string;
  genre?: string[];
  publication_year?: number;
}


export const LS_BOOK_KEY = "read_app_books";
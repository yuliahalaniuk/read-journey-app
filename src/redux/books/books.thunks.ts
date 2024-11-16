import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllBooksThunk = createAsyncThunk(
  "books/getAll",
  async ({ query }: { query?: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query ? query : "*"}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch books data");
      }
      const data = await response.json();
      return data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getRecommendedThunk = createAsyncThunk(
  "books/getRecommended",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=*"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch books data");
      }
      const data = await response.json();
      return data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApiClient from "../../api/baseApiClient";

export const getAllBooksThunk = createAsyncThunk(
  "books/getAll",
  async (
    {
      query,
      offset = 0,
      maxResults = 10,
    }: { query?: string; offset?: number; maxResults?: number },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await baseApiClient.get("/", {
        params: {
          q: query ? query : "*",
          startIndex: offset,
          maxResults,
        },
      });
      return data.items;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error?.message || error.message
      );
    }
  }
);

export const getRecommendedThunk = createAsyncThunk(
  "books/getRecommended",
  async (
    {
      offset = 0,
      maxResults = 10,
    }: { offset?: number; maxResults?: number } = {},
    { rejectWithValue }
  ) => {
    try {
      const { data } = await baseApiClient.get("/", {
        params: {
          q: "subject:popular",
          startIndex: offset,
          maxResults,
        },
      });
      return data.items;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error?.message || error.message
      );
    }
  }
);



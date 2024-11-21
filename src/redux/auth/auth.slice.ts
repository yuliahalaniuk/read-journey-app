import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import {
  logInUserThunk,
  logOutThunk,
  registerUserThunk,
  signInWithGoogleThunk,
} from "./auth.thunks";

export interface AuthState {
  user: Partial<User> | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(logInUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(signInWithGoogleThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.status = "idle";
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: any) => {
          state.status = "failed";
          state.error = action?.payload ?? "Ooops... something went wrong";
        }
      );
  },
});

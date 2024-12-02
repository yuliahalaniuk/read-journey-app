import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import {
  logInUserThunk,
  logOutThunk,
  registerUserThunk,
  signInWithGoogleThunk,
} from "./auth.thunks";
import { toast } from "react-toastify";

export interface AuthState {
  user: Partial<User> | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload as any;
        state.loading = false;
        state.error = null;

        toast.success(
          "Your account is successfully registered. Please log in to your account now"
        );
      })
      .addCase(logInUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(signInWithGoogleThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error =
            (action as any).payload ?? "Ooops... something went wrong";
        }
      );
  },
});

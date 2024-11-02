import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";

export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInUserThunk = createAsyncThunk(
  "auth/logInUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      return { user: userCredential.user, token };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInWithGoogleThunk = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      return { user: result.user, token };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk("auth/logOut", async () => {
  await signOut(auth);
});

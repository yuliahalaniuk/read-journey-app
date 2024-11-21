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
      const { user }: { user: any } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userInfo = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };

      console.log("userCredential", user);
      return { user: userInfo, token: user.accessToken };
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
      const { user }: { user: any } = await signInWithPopup(auth, provider);

      const userInfo = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };

      return { user: userInfo, token: user.accessToken };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk("auth/logOut", async () => {
  await signOut(auth);
});

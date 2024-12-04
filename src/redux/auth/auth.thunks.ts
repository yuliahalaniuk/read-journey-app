import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { createThunkWithCallbacks } from "../../utils/createThunkWithCallbacks";

export const registerUserThunk = createThunkWithCallbacks(
  "auth/registerUser",
  async (
    {
      email,
      password,
      name,
    }: { email: string; password: string; name: string },
    thunkAPI
  ) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });
      // await sendEmailVerification(userCredential.user);

      return {
        accessToken: (userCredential.user as any).accessToken,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInUserThunk = createThunkWithCallbacks(
  "auth/logInUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    const { rejectWithValue } = thunkAPI;
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

      return { user: userInfo, token: user.accessToken };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInWithGoogleThunk = createThunkWithCallbacks(
  "auth/signInWithGoogle",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
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

export const logOutThunk = createThunkWithCallbacks(
  "auth/logOut",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

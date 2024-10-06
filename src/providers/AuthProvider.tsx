import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, ReactNode, useContext, useState } from "react";
import { auth, database, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";

export interface UserNeeded {
  accessToken?: string;
  email?: string;
  displayName: null;
  phoneNumber: null;
  photoURL: null;
  stsTokenManager: {
    accessToken?: string;
    refreshToken?: string;
    expirationTime: 1727196858957;
  };
}

type AuthContextType = {
  token: string;
  user: any;
  logInUser: (email: string, password: string) => Promise<void>;
  registerUser: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const provider = new GoogleAuthProvider();

export const TOKEN_LS_NAME = "access";
export const USER_LS_NAME = "user";
function writeUserData(
  userId: string,
  fields: Record<string, string | null | undefined>
) {
  set(ref(database, "users/" + userId), fields);
}

const getTokenFromLS = () => {
  return localStorage.getItem(TOKEN_LS_NAME) || "";
};

const getUserFromLS = () => {
  const user = localStorage.getItem(USER_LS_NAME);
  return user ? JSON.parse(user) : null;
};

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(getUserFromLS);
  const [token, setToken] = useState<string>(getTokenFromLS);

  const nav = useNavigate();
  //   useEffect(() => {
  //     console.log("token", token);
  //   }, [token]);

  const logInUser = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const token = await user.getIdToken();

      if (!token) {
        throw new Error("Failed to retrieve token.");
      }

      console.log("Token retrieved:", user);
      localStorage.setItem(TOKEN_LS_NAME, token);
      setUser(user);
      setToken(token);

      const necessaryFields = {
        name: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        id: user.uid,
      };

      // set(userRef, {
      //   displayName,
      //   photoUrl,
      // });

      nav("/home");
      await writeUserData(user.uid, necessaryFields);
    } catch (error: any) {
      console.error("Login error:", error);
      console.error(`Error Code: ${error.code}, Message: ${error.message}`);
    }
  };

  const registerUser = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      const user: User & { accessToken?: string } = userCredential.user;
      console.log("user", user);

      nav("/logIn");
      //   localStorage.setItem(TOKEN_LS_NAME, user?.accessToken ?? "");
      //   setUser(user);
      //   setToken(user?.accessToken ?? "");
    } catch (error: any) {
      console.log("error", error);
      console.error(`Error Code: ${error.code}, Message: ${error.message}`);
    }
  };

  // Google sign-in function with correct typing
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log("result", result);
      console.log("credential", credential);
      const necessaryFields = {
        name: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        id: user.uid,
      };

      const userId = user.uid;

      if (!token) {
        throw new Error("Failed to retrieve token.");
      }
      setUser(user);
      setToken(token);
      localStorage.setItem(TOKEN_LS_NAME, token);

      await writeUserData(userId, necessaryFields);
    } catch (error: any) {
      console.log("error", error);
      console.error(`Error Code: ${error.code}, Message: ${error.message}`);
    }
  };

  const logOut = async () => {
    const result = await signOut(auth);

    setUser(null);
    setToken("");
    localStorage.removeItem(TOKEN_LS_NAME);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, logInUser, registerUser, signInWithGoogle, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

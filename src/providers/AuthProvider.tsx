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
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

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

const getTokenFromLS = () => {
  return localStorage.getItem(TOKEN_LS_NAME) || "";
};
export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
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

      console.log("Token retrieved:", token);

      localStorage.setItem(TOKEN_LS_NAME, token);
      setUser(user);
      setToken(token);

      nav("/home");
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

      setUser(user);
      setToken(token || "");
      localStorage.setItem(TOKEN_LS_NAME, token || "");
    } catch (error: any) {
      console.log("error", error);
      console.error(`Error Code: ${error.code}, Message: ${error.message}`);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setToken("");
        localStorage.removeItem(TOKEN_LS_NAME);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ token, user, logInUser, registerUser, signInWithGoogle, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

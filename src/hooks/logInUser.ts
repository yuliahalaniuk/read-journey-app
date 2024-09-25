import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const logInUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user", user);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

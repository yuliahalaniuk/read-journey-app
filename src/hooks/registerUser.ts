import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const registerUser = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user", user);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

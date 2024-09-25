import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsijWkcSF1KsZl645eI94F5LT0g40dKyQ",
  authDomain: "read-journey-b3fa8.firebaseapp.com",
  projectId: "read-journey-b3fa8",
  storageBucket: "read-journey-b3fa8.appspot.com",
  messagingSenderId: "361084146690",
  appId: "1:361084146690:web:067f158cafb0b7508d031b",
  measurementId: "G-YKSMNSG7F4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

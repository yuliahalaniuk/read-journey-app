import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDsijWkcSF1KsZl645eI94F5LT0g40dKyQ",
  authDomain: "read-journey-b3fa8.firebaseapp.com",
  projectId: "read-journey-b3fa8",
  storageBucket: "read-journey-b3fa8.appspot.com",
  messagingSenderId: "361084146690",
  appId: "1:361084146690:web:067f158cafb0b7508d031b",
  measurementId: "G-YKSMNSG7F4",
  databaseURL:
    "https://read-journey-b3fa8-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function getUsers() {
  const citiesCol = collection(db, "users");
  // const citySnapshot = await getDocs(citiesCol);
  // const cityList = citySnapshot.docs.map((doc) => doc.data());
  return citiesCol;
}
const database = getDatabase(app);
export { app, auth, db, database };

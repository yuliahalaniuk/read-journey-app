export const he = "";
// function writeUserData(
//   userId: string,
//   fields: Record<string, string | null | undefined>
// ) {
//   set(ref(database, "users/" + userId), fields);
// }
// const getTokenFromLS = () => {
//   return localStorage.getItem(TOKEN_LS_NAME) || "";
// };

// const getUserFromLS = () => {
//   const user = localStorage.getItem(USER_LS_NAME);
//   return user ? JSON.parse(user) : null;
// };
// const [user, setUser] = useState<User | null>(getUserFromLS);
// const [token, setToken] = useState<string>(getTokenFromLS);

// const nav = useNavigate();
// //   useEffect(() => {
// //     console.log("token", token);
// //   }, [token]);

// const logInUser = async (email: string, password: string) => {
//   try {
//     const userCredential: UserCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     const user = userCredential.user;

//     const token = await user.getIdToken();

//     if (!token) {
//       throw new Error("Failed to retrieve token.");
//     }

//     console.log("Token retrieved:", user);
//     localStorage.setItem(TOKEN_LS_NAME, token);
//     setUser(user);
//     setToken(token);

//     const necessaryFields = {
//       name: user.displayName,
//       photoURL: user.photoURL,
//       email: user.email,
//       id: user.uid,
//     };

//     // set(userRef, {
//     //   displayName,
//     //   photoUrl,
//     // });

//     nav("/home");
//     await writeUserData(user.uid, necessaryFields);
//   } catch (error: any) {
//     console.error("Login error:", error);
//     console.error(`Error Code: ${error.code}, Message: ${error.message}`);
//   }
// };

// const registerUser = async (email: string, password: string) => {
//   try {
//     const userCredential: UserCredential =
//       await createUserWithEmailAndPassword(auth, email, password);
//     const user: User & { accessToken?: string } = userCredential.user;
//     console.log("user", user);

//     nav("/logIn");
//     //   localStorage.setItem(TOKEN_LS_NAME, user?.accessToken ?? "");
//     //   setUser(user);
//     //   setToken(user?.accessToken ?? "");
//   } catch (error: any) {
//     console.log("error", error);
//     console.error(`Error Code: ${error.code}, Message: ${error.message}`);
//   }
// };

// // Google sign-in function with correct typing
// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential?.accessToken;
//     const user = result.user;

//     console.log("result", result);
//     console.log("credential", credential);
//     const necessaryFields = {
//       name: user.displayName,
//       photoURL: user.photoURL,
//       email: user.email,
//       id: user.uid,
//     };

//     const userId = user.uid;

//     if (!token) {
//       throw new Error("Failed to retrieve token.");
//     }
//     setUser(user);
//     setToken(token);
//     localStorage.setItem(TOKEN_LS_NAME, token);

//     await writeUserData(userId, necessaryFields);
//   } catch (error: any) {
//     console.log("error", error);
//     console.error(`Error Code: ${error.code}, Message: ${error.message}`);
//   }
// };

// const logOut = async () => {
//   const result = await signOut(auth);

//   setUser(null);
//   setToken("");
//   localStorage.removeItem(TOKEN_LS_NAME);
// };

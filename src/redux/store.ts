import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootReducerType } from "./rootReducer";
import { useDispatch } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<RootReducerType>;
export const persistor = persistStore(store);

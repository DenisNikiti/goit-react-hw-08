import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/slice";

import contactslice from "./contacts/Slice";
import filtersSlice from "./filter/Slice";

const TokenPersist = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedToken = persistReducer(TokenPersist, authSlice);
export const store = configureStore({
  reducer: {
    contact: contactslice,
    filter: filtersSlice,
    auth: persistedToken,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

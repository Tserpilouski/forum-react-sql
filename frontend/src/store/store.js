import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";
import { postsApi } from "../services/postsServices";
import { commentsApi } from "../services/commentsServices";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      postsApi.middleware,
      commentsApi.middleware
    ),
});

setupListeners(store.dispatch);

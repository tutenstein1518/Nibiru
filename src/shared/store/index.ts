import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./reducers/carts";
import commentsSlice from "./reducers/comments";

export const store = configureStore({
  reducer: {
    carts: cartsSlice,
    comments: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

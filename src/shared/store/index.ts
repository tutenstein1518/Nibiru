import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./reducers/carts";
import commentsSlice from "./reducers/comments";
import usersSlice from "./reducers/users";

export const store = configureStore({
  reducer: {
    carts: cartsSlice,
    comments: commentsSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

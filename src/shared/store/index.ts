import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./reducers/carts";
import commentsSlice from "./reducers/comments";
import usersSlice from "./reducers/users";
import postsSlice from "./reducers/users-posts";

export const store = configureStore({
  reducer: {
    carts: cartsSlice,
    comments: commentsSlice,
    users: usersSlice,
    posts: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPosts } from "../../../types/users";

interface IState {
  posts: IPosts[];
  loading: boolean;
  error: string;
}

const initialState: IState = {
  posts: [],
  loading: false,
  error: "",
};

export const getPosts = createAsyncThunk("userPosts", async () => {
  const response = await fetch("http://localhost:1703/users-posts");
  const posts = (await response.json()) as IPosts[];
  return posts;
});

export const postsSlice = createSlice({
  name: "users-posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка загрузки";
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<IPosts[]>) => {
        // Исправлен тип на IPost[]
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      });
  },
});

export default postsSlice.reducer;

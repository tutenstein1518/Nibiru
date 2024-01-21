// types
import { IComments } from "../../../types/comments";
// redux
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  comments: IComments[];
  loading: boolean;
  error: string;
}

const initialState: IState = {
  comments: [],
  loading: false,
  error: "",
};

export const getComments = createAsyncThunk("getComments", async () => {
  const response = await fetch("http://localhost:1703/comments");
  const comments = (await response.json()) as IComments[];
  return comments;
});

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComments.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка загрузки";
      })
      .addCase(
        getComments.fulfilled,
        (state, action: PayloadAction<IComments[]>) => {
          state.comments = action.payload;
          state.loading = false;
          state.error = "";
        }
      );
  },
});

export default commentsSlice.reducer;

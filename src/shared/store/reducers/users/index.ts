// redux
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// types
import { IUsers } from "../../../types/users";

// IState
interface IState {
  users: IUsers[];
  loading: boolean;
  error: string;
}

const initialState: IState = {
  users: [],
  loading: false,
  error: "",
};

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await fetch("http://localhost:1703/users");
  const comments = (await response.json()) as IUsers[];
  return comments;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка загрузки";
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<IUsers[]>) => {
        state.users = action.payload;
        state.loading = false;
        state.error = "";
      });
  },
});

export default usersSlice.reducer;

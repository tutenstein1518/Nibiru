import { RootState } from "../..";

export const usersSelector = (state: RootState) => {
  const { users } = state.users;
};

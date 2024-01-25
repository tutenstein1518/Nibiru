// scss
import index from "./index.module.scss";
// types
import { IUser } from "../../../../shared/types/users";

export const UserDescription = ({ user }: IUser) => {
  return (
    <div className={index.user_description}>
      <p>{user.user_about}</p>
    </div>
  );
};

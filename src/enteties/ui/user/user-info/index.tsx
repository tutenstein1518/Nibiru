import { IUser } from "../../../../shared/types/users";
import index from "./index.module.scss";

export const UserInfo = ({ user }: IUser) => {
  return (
    <div className={index.user_info}>
      <h1 className={index.user_nickname}>{user.user_name}</h1>
      <h2 className={index.user_fullname}>{user.user_full_name}</h2>
    </div>
  );
};

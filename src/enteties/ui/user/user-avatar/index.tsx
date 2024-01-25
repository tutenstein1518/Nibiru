// scss
import index from "./index.module.scss";
// types
import { IUser } from "../../../../shared/types/users";

export const UserAvatar = ({ user }: IUser) => {
  return (
    <div className={index.user_cart__avatar}>
      <img src={user.user_avatar} className={index.user_cart__avatar_img} />
    </div>
  );
};

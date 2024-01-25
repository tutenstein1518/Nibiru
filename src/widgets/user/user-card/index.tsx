// ui
import index from "./index.module.scss";

// react-router-dom
import { useParams } from "react-router-dom";
// react
import { useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store";
import { getUsers } from "../../../shared/store/reducers/users";
import { useAppDispatch } from "../../../features/hooks";
import { UserAvatar } from "../../../enteties/ui/user/user-avatar";
import { UserInfo } from "../../../enteties/ui/user/user-info";
import { UserDescription } from "../../../enteties/ui/user/user-description";
import { Subscribe } from "../../../features/user/user-subscribe";
import { SendMessage } from "../../../features/user/user-message";

export const UserCard = () => {
  // extract id
  const { id } = useParams();
  //   getUsers
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const items = useSelector((state: RootState) => state.users.users);
  const users = items.filter((user) => user.user_id === Number(id));
  return (
    <div className={index.user_profile}>
      {users.map((user) => (
        <div className={index.user_card}>
          <UserAvatar user={user} />
          <UserInfo user={user} />
          <UserDescription user={user} />
          <div className={index.buttons_panel}>
            <Subscribe />
            <SendMessage />
          </div>
        </div>
      ))}
    </div>
  );
};

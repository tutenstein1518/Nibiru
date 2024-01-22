import index from "./index.module.scss";
// react-router-dom
import { useParams } from "react-router-dom";
// react
import { useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import { getUsers } from "../../shared/store/reducers/users";
import { useAppDispatch } from "../../features/hooks";
import { Button } from "antd";

export const User = () => {
  // state
  // extract id
  const { id } = useParams();
  //   getUsers
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  });
  const items = useSelector((state: RootState) => state.users.users);
  const users = items.filter((user) => user.user_id === Number(id));

  return (
    <div className={index.root}>
      {users.map((user) => (
        <div className={index.user_profile}>
          <div className={index.user_card}>
            <div className={index.user_cart__avatar}>
              <img
                src={user.user_avatar}
                alt="user logo"
                className={index.user_cart__avatar_img}
              />
            </div>
            <div className={index.user_info}>
              <span className={index.user_nickname}>{user.user_name}</span>
              <span className={index.user_fullname}>{user.user_full_name}</span>
            </div>

            <div className={index.buttons_panel}>
              <Button
                className={index.user_cart__subscribe_button}
                type="primary"
              >
                Подписаться
              </Button>
              <Button type="primary" danger className={index.user_cart__button}>
                Написать
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

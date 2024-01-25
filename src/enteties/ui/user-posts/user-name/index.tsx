// types
import { NavLink } from "react-router-dom";
import { IPost } from "../../../../shared/types/users";
// scss
import index from "./index.module.scss";

export const PostUserName = ({ post }: IPost) => {
  return (
    <NavLink className={index.root} to={`/user/${post.user_id}`}>
      {post.user_name}
    </NavLink>
  );
};

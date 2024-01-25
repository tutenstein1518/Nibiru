// scss
import index from "./index.module.scss";
// types
import { IPost } from "../../../../shared/types/users";

export const PostAvatar = ({ post }: IPost) => {
  return (
    <div className={index.root}>
      <img className={index.avatar} src={post.user_avatar} alt="" />
    </div>
  );
};

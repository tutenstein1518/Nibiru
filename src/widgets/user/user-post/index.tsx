// types
import { IPost } from "../../../shared/types/users";
// scss
import index from "./index.module.scss";

export const Post = ({ post }: IPost) => {
  return <div className={index.root}>{post.user_post}</div>;
};

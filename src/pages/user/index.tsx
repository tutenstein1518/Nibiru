// styles
import index from "./index.module.scss";
// components
import { UserCard } from "../../widgets/user/user-card";
import { UserPosts } from "../../widgets/user/user-posts";

export const User = () => {
  return (
    <div className={index.root}>
      <UserCard />
      <UserPosts />
    </div>
  );
};

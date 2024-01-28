// scss
import index from "./index.module.scss";
// react
import { useEffect } from "react";
// ui

// redux
import { useAppDispatch } from "../../../features/hooks";
import { getPosts } from "../../../shared/store/reducers/users-posts";
import { RootState } from "../../../shared/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostAvatar } from "../../../enteties/ui/user-posts/user-avatar";
import { PostUserName } from "../../../enteties/ui/user-posts/user-name";
import { Post } from "../user-post";
import {
  DislikeOutlined,
  EnterOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { SendComment } from "../../../features/user/user-send__comment";

export const UserPosts = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { id } = useParams();

  const posts = useSelector((state: RootState) => state.posts.posts);
  const post = posts.filter((p) => p.user_id === Number(id));

  return (
    <div className={index.root}>
      {post.map((p) => (
        <div className={index.post_block}>
          <div className={index.post_block__name}>
            <PostAvatar post={p} />
            <PostUserName post={p} />
          </div>

          <div className={index.post_block__post}>
            <Post post={p} />
          </div>
          <div className={index.icons_panel}>
            <LikeOutlined />
            <DislikeOutlined />
            <EnterOutlined />
            <SendComment />
          </div>
        </div>
      ))}
    </div>
  );
};

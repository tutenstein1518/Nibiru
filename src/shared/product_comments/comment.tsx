// scss
import index from "./index.module.scss";
// icons
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
// react
import { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../features/hooks";
import { getComments } from "../store/reducers/comments";
import { RootState } from "../store";

export const Comment = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };

  // fetching
  const dispatch = useAppDispatch();
  //useEffect
  useEffect(() => {
    dispatch(getComments());
  }, []);
  // state
  const comments = useSelector((state: RootState) => state.comments.comments);
  return (
    <div>
      {comments?.map((comm, i) => (
        <div className={index.comment_block} key={i}>
          <div className={index.comment_block__user_block}>
            <img
              src={comm.user_avatar}
              alt="#"
              className={index.user_block__logo}
            />
            <div className={index.user_block__name}>
              <h4>{comm.user_name}</h4>
            </div>
          </div>
          <div className={index.comment_block__comments}>
            {comm.user_comment}
          </div>
          <div className={index.comment_block__reactions}>
            <div className={index.block_reactions}>
              <LikeOutlined
                className={isLiked ? index.is_liked_icon : index.default_icon}
                onClick={handleLike}
              />
              <DislikeOutlined
                className={
                  isDisliked ? index.is_disliked_icon : index.default_icon
                }
                onClick={handleDislike}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

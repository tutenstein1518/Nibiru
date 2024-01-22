// scss
import index from "./index.module.scss";
// icons
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
// react
import { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../features/hooks";
import { getComments } from "../../../../shared/store/reducers/comments";
import { RootState } from "../../../../shared/store";
// react-router-dom
import { NavLink, useParams } from "react-router-dom";
import { Rate } from "antd";
import { NoComments } from "../../../../shared/product_comments/no_comments";

export const Comment = () => {
  // like&dislike
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
  // extract id
  let { id } = useParams();
  // filter by id
  const filteredComments = comments.filter(
    (comment) => comment.product_id == id
  );

  return (
    <div>
      {filteredComments.map((comm, i) => (
        <div>
          <div className={index.comment_block} key={i}>
            <div className={index.comment_block__user_block}>
              <img
                src={comm.user_avatar}
                alt="#"
                className={index.user_block__logo}
              />
              <div className={index.user_block__name}>
                <NavLink to={`/user/${comm.user_id}`}>
                  <h4>{comm.user_name}</h4>
                </NavLink>
              </div>
            </div>
            <div className={index.comment_block__comments}>
              {comm.user_comment}
            </div>
            <div className={index.users_rate}>
              <Rate allowHalf disabled defaultValue={comm.users_rate} />
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
        </div>
      ))}
      {filteredComments.length === 0 && <NoComments />}
    </div>
  );
};

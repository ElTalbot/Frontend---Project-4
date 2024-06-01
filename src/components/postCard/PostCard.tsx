import React, { useState } from "react";
import { IPost } from "../../interfaces/post";
import { useNavigate } from "react-router-dom";
import "./postCard.scss";
import DeletePostModal from "../../pages/deletePostModal/deletePostModal";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";

interface PostProps extends IPost {
  user: IUser | null;
  post: IPost; // Add post prop
  fetchPosts: Function;
  username: any;
  updated_at: any;
}

const Post: React.FC<PostProps & { user: IUser | null }> = ({
  id,
  content,
  user_id,
  username,
  user,
  post,
  fetchPosts,
  updated_at,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const navigate = useNavigate();

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  const updateAtDate = new Date(updated_at);
  const formattedUpdatedAt = updateAtDate.toLocaleString();

  console.log(formattedUpdatedAt);
  return (
    <div className="post">
      <div className="post__content">
        <p>{content}</p>
        {user?.id === post.user_id && (
          <>
            <button className="post__trash" onClick={toggleDeleteModal}>
              <i className="fa fa-trash"></i>
            </button>
            {deleteModal && (
              <DeletePostModal
                toggleDeleteModal={toggleDeleteModal}
                user={user}
                postId={id}
                fetchPosts={fetchPosts}
              />
            )}
          </>
        )}{" "}
      </div>
      <div className="post__details">
        <p className="post__username">{post.username}</p>
        <p className="post__date">{formattedUpdatedAt}</p>
      </div>
    </div>
  );
};

export default Post;

import React from "react";
import { IUser } from "../../interfaces/user";
import DeletePostForm from "../deletePostForm/deletePostForm";
import "./deletePostModal.scss";

interface DeleteModalProps {
  toggleDeleteModal: () => void;
  user: null | IUser;
  postId: string;
  fetchPosts: Function;
}

const DeletePostModal: React.FC<DeleteModalProps> = ({
  toggleDeleteModal,
  user,
  postId,
  fetchPosts,
}) => {
  return (
    <div className="update">
      <section className="update__container">
        <section className="update__content">
          <DeletePostForm
            toggleDeleteModal={toggleDeleteModal}
            postId={postId}
            fetchPosts={fetchPosts}
          />
        </section>
      </section>
    </div>
  );
};

export default DeletePostModal;

import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";
import "./deletePostForm.scss";

interface DeletePostFormProps {
  toggleDeleteModal: () => void;
  postId: string;
  fetchPosts: Function;
}

const DeletePostForm: React.FC<DeletePostFormProps> = ({
  toggleDeleteModal,
  postId,
  fetchPosts,
}) => {
  const navigate = useNavigate();

  // -------------------DELETE POST----------------------------
  async function deletePost() {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${baseUrl}/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
      toggleDeleteModal();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  return (
    <div className="show-form">
      <h4>Are you sure you want to delete this comment?</h4>
      <div className="show-form__buttons">
        <button
          className="show-form__deletebtn"
          onClick={async () => {
            await deletePost();
            navigate("/posts");
          }}
        >
          Delete &nbsp;
          <i className="fa fa-trash"></i>
        </button>
        <button onClick={toggleDeleteModal} className="show-form__btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeletePostForm;

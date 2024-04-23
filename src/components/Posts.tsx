import React, { SyntheticEvent } from "react";
import Post from "./PostCard";
import { IPost } from "../interfaces/post";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";
import { IUser } from "../interfaces/user";
import axios from "axios";
import UpdatePostModal from "./UpdatePost";

type Posts = null | Array<IPost>;

function AllPosts({ user }: { user: null | IUser }) {
  const [posts, setPosts] = React.useState<Posts>(null);
  const [updateModal, setUpdateModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const { postId } = useParams();
  const navigate = useNavigate();
  const [postIdToDelete, setPostIdToDelete] = React.useState<null | string>(
    null
  );

  // -------------------DELETE POST----------------------------
  async function deletePost(postId: string) {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      await axios.delete(`${baseUrl}/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDeleteModal(false);
      navigate("/posts");
    } catch (error) {}
    console.log("post id in delete post function", postId);
  }

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const resp = await fetch(`${baseUrl}/posts`);
        const data = await resp.json();
        setPosts(data);
        setUpdateModal(false);
        setDeleteModal(false);
        console.log("is this a user?", user);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, [postId]);

  const handleCloseModal = () => {
    setUpdateModal(false);
  };

  const [formData, setFormData] = React.useState({
    content: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const resp = await axios.post(`${baseUrl}/posts`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Post added:", resp.data);

      // Clear form data after successful submission
      setFormData({
        content: "",
      });
    } catch (error) {}
  }

  return (
    <section className="section is-flex is-flex-direction-column is-justify-self-center mx-6 mt-6">
      <h1 className="subtitle is-size-2 mb-2">
        The Home of Positivity and Inspiration
      </h1>
      <h2 className="subtitle">
        Join others in your Owlcore Online Community and come together and be a
        force of empowerment to get moving, YOUR way!! Tell us your stories,
        words, thoughts, feelings or just simply browse and feel the love from
        fellow community members..
      </h2>

      <div className="container is-widescreen m-0">
        <div className="columns is-multiline">
          {posts?.map((post: IPost) => (
            <>
              {user && (
                <button
                  className="button bin m-0 p-0"
                  onClick={() => {
                    setPostIdToDelete(post.id);
                    console.log("post??", post.id);
                    setDeleteModal(true);
                  }}
                >
                  <span className="icon ml-1">
                    <i className="fa fa-trash"></i>
                  </span>
                </button>
              )}
              {/* <button
                onClick={() => {
                  setUpdateModal(true);
                }}
              >
                Update
                <span className="icon ml-1">
                  <i className="fa fa-plus"></i>
                </span>
              </button> */}
              {updateModal && <UpdatePostModal onClose={handleCloseModal} />}
              <Post key={post.id} {...post} />
            </>
          ))}
        </div>
      </div>
      <div className="card mt-6 p-4">
        <form onSubmit={handleSubmit}>
          <div className="columns is-multiline is-flex ">
            <div className="title spread column is-size-2 mb-0 ml-2">
              Spread the positivity
            </div>
            <div className="column mt-2">
              <span className=" is-1 icon homepage is-medium">
                <i className="fa-solid fa-hand-point-down fa-xl mr-2"></i>
                <i className="fa-solid fa-face-smile fa-xl"></i>
              </span>
            </div>
          </div>
          {/* --------------CONTENT--------------- */}
          <div className="field p-1 mb-1">
            <div className="control has-icons-right">
              <input
                className="input"
                placeholder="eg.. Nothing is impossible. The word itself says I'm possible.."
                type="text"
                name="content"
                onChange={handleChange}
                value={formData.content}
              />
              <span className="icon is-small is-right">
                <i className="fas fas fa-user"></i>
              </span>
            </div>
          </div>

          <button className="button book ml-1">Submit</button>
        </form>
      </div>

      {/* --------------DELETE MODAL-------------------- */}
      {deleteModal && (
        <div className="modal is-active">
          <div className="modal-background">
            <div className="modal-content card p-4">
              <h1 className="is-size-4 has-text-centered pb-5">
                Are you sure you want to delete this comment? ?
              </h1>
              <div className="is-flex is-justify-content-space-between px-6 mb-2">
                <button
                  onClick={() => deletePost(postIdToDelete!)} // Pass postIdToDelete to deletePost
                  className="button is-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setDeleteModal(false);
                    console.log("working??");
                  }}
                  className="button is-outlined"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AllPosts;

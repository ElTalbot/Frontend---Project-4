import React, { SyntheticEvent } from "react";
import Post from "../../components/postCard/PostCard";
import { IPost } from "../../interfaces/post";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";
import axios from "axios";
import UpdatePostModal from "../../components/UpdatePost";
import "./community.scss";

type Posts = null | Array<IPost>;

function AllPosts({ user }: { user: null | IUser }) {
  const [posts, setPosts] = React.useState<Posts>(null);
  const [updateModal, setUpdateModal] = React.useState(false);
  const { postId } = useParams();
  const navigate = useNavigate();
  const [postIdToDelete, setPostIdToDelete] = React.useState<null | string>(
    null
  );
  const [deleteModal, setDeleteModal] = React.useState(false);

  async function fetchPosts() {
    try {
      const resp = await fetch(`${baseUrl}/posts`);
      const data = await resp.json();
      setPosts(data);
      setUpdateModal(false);
      setDeleteModal(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  React.useEffect(() => {
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
    const currentUser = user;

    try {
      const resp = await axios.post(
        `${baseUrl}/posts`,
        {
          ...formData,
          username: currentUser?.username,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Clear form data after successful submission
      setFormData({
        content: "",
      });
      fetchPosts();
      // Fetch the updated list of posts
      const newPosts = await axios.get(`${baseUrl}/posts`);
      setPosts(newPosts.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <section className="posts">
      <div className="posts__title">
        <h1>The Home of Positivity and Inspiration</h1>
        <h3>
          Join others in your Owlcore Online Community and come together and be
          a force of empowerment to get moving, YOUR way!!
        </h3>
        <p>
          Tell us your stories, words, thoughts, feelings or just simply browse
          and feel the love from fellow community members..
        </p>
      </div>
      <div className="posts__submittedposts">
        {posts?.map((post: IPost) => (
          <>
            {updateModal && (
              <UpdatePostModal
                onClose={handleCloseModal}
                setPostIdToDelete={post.id}
              />
            )}
            <Post
              key={post.id}
              {...post}
              user={user}
              username={user?.username}
              updated_at={post.updated_at}
              post={post}
              fetchPosts={fetchPosts}
            />
          </>
        ))}
      </div>
      <div className="posts__title">
        <form onSubmit={handleSubmit}>
          <div className="posts__spread">
            <h2>Spread the positivity &nbsp; </h2>
            <i className="posts__icon fa-solid fa-face-smile fa-xl"></i>
          </div>
          {/* --------------CONTENT--------------- */}
          <div>
            <input
              className="posts__input"
              placeholder="eg.. Nothing is impossible. The word itself says I'm possible.."
              type="text"
              name="content"
              onChange={handleChange}
              value={formData.content}
            />
          </div>
          <button className="posts__btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default AllPosts;

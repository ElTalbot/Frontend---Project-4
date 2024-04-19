import React from "react";
import Post from "./PostCard";
import { IPost } from "../interfaces/post";
import { Link } from "react-router-dom";
import { baseUrl } from "../config";

type Posts = null | Array<IPost>;

function AllPosts() {
  const [posts, setPosts] = React.useState<Posts>(null);

  React.useEffect(() => {
    async function fetchposts() {
      const resp = await fetch(`${baseUrl}/posts`);
      const data = await resp.json();
      setPosts(data);
      console.log("this is the data: ", data);
    }
    fetchposts();
  }, []);

  return (
    <section className="section is-medium is-flex is-flex-direction-column mt-6">
      <h1 className="title">Posts</h1>
      <h2 className="subtitle">Find the post that is right for you.</h2>
      <div className="container">
        <div className="columns is-multiline">
          {posts?.map((post: any) => {
            return <Post key={post.id} {...post} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default AllPosts;

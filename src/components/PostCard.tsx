import { IPost } from "../interfaces/post";
import { Link } from "react-router-dom";
import React from "react";

function Post({ id, content, created_at, updated_at, user }: IPost) {
  return (
    <div className="column is-one-third-desktop is-one-third-tablet">
      <Link to={`/posts/${id}`}>
        <div className="card">
          <div className="card-content p-4">
            <div className="is-flex is-flex-direction-column">
              <p className="has-text-weight-bold is-size-7 is-uppercase is-flex is-justify-content-flex-end">
                {content}
              </p>
              <div className="is-size-4">{user}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Post;

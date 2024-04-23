import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";

export default function UpdatePostModal({ onClose }: any) {
  const navigate = useNavigate();
  const { postId } = useParams();

  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`${baseUrl}/posts/${postId}`);

      const postData = await resp.json();

      setFormData(postData);
      // console.log("this is the", movementData);
    }
    fetchMovement();
  }, [postId]);

  const [formData, setFormData] = useState({
    content: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    // console.log(newFormData)
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    const resp = await axios.put(`${baseUrl}/posts/${postId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("resp", resp.data);
    navigate("/posts");
  }

  return (
    <div className="modal is-active">
      <div className="modal-background">
        <div className="modal-content card p-4">
          <form onSubmit={handleSubmit}>
            <div className="title is-size-2 pl-1 mb-5">Update Post</div>
            {/* --------------NAME--------------- */}

            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Content"
                  type="text"
                  name={"content"}
                  onChange={handleChange}
                  value={formData.content}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <button className="button book">Submit</button>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={onClose}
            ></button>
          </form>
        </div>
      </div>
    </div>
  );
}

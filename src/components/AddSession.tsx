import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddSessionModal({ onClose }: any) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    day: "",
    capacity: "",
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

    const resp = await axios.post("/api/sessions", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    onClose();

    navigate("/sessions");

    console.log("token", resp);
  }

  return (
    <div className="modal-is-active">
      <div className="modal-background">
        <div className="modal-content">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="title is-size-2 pl-1 mb-5">Add Session</div>

              {/* ---------------NAME---------------------- */}
              <div className="columns is-multiline p-1 mb-0">
                <div className="field column">
                  <div className="control has-icons-right">
                    <input
                      className="input"
                      placeholder="Name"
                      type="text"
                      name={"name"}
                      onChange={handleChange}
                      value={formData.name}
                    />
                    <span className="icon is-small is-right">
                      <i className="fas fa-paw"></i>
                    </span>
                  </div>
                </div>
              </div>

              {/* ---------------DAY---------------------- */}
              <div className="columns is-multiline p-1 mb-0">
                <div className="field column">
                  <div className="control has-icons-right">
                    <input
                      className="input"
                      placeholder="Day"
                      type="text"
                      name={"day"}
                      onChange={handleChange}
                      value={formData.day}
                    />
                    <span className="icon is-small is-right">
                      <i className="fas fa-paw"></i>
                    </span>
                  </div>
                </div>
              </div>

              {/* ---------------DATE---------------------- */}
              <div className="columns is-multiline p-1 mb-0">
                <div className="field column">
                  <div className="control has-icons-right">
                    <input
                      className="input"
                      placeholder="Date"
                      type="date"
                      name={"date"}
                      onChange={handleChange}
                      value={formData.date}
                    />
                    <span className="icon is-small is-right">
                      <i className="fas fa-paw"></i>
                    </span>
                  </div>
                </div>
              </div>

              {/* ---------------CAPACITY---------------------- */}
              <div className="columns is-multiline p-1 mb-0">
                <div className="field column">
                  <div className="control has-icons-right">
                    <input
                      className="input"
                      placeholder="Capacity"
                      type="text"
                      name={"capacity"}
                      onChange={handleChange}
                      value={formData.capacity}
                    />
                    <span className="icon is-small is-right">
                      <i className="fas fa-paw"></i>
                    </span>
                  </div>
                </div>
              </div>
              <button className="button mt-6">Submit</button>
              <button
                className="modal-close is-large"
                aria-label="close"
                onClick={onClose}
              ></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

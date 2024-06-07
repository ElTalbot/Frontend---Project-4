import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";
import "./addSessionForm.scss";

export default function AddSessionModal({ toggleAddModal }: any) {
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

    const resp = await axios.post(`${baseUrl}/sessions`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toggleAddModal();
    navigate("/sessions");
  }

  return (
    <form onSubmit={handleSubmit} className="show-form">
      {/* ---------------NAME---------------------- */}

      <div className="show-form__all">
        <i className="fas fa-id-badge"></i>
        <input
          className="show-form__input"
          placeholder="Name"
          type="text"
          name={"name"}
          onChange={handleChange}
          value={formData.name}
        />
      </div>

      {/* ---------------DAY---------------------- */}

      <div className="show-form__all">
        <i className="fas fa-sun"></i>
        <input
          className="show-form__input"
          placeholder="Day"
          type="text"
          name={"day"}
          onChange={handleChange}
          value={formData.day}
        />
      </div>

      {/* ---------------DATE---------------------- */}

      <div className="show-form__all">
        <i className="fas fa-calendar-days"></i>
        <input
          className="show-form__input"
          placeholder="Date"
          type="date"
          name={"date"}
          onChange={handleChange}
          value={formData.date}
        />
      </div>

      {/* ---------------CAPACITY---------------------- */}

      <div className="show-form__all">
        <i className="fas fa-people-roof"></i>
        <input
          className="show-form__input"
          placeholder="Capacity"
          type="text"
          name={"capacity"}
          onChange={handleChange}
          value={formData.capacity}
        />
      </div>

      <button className="show-form__btn book">Submit</button>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={toggleAddModal}
      ></button>
    </form>
  );
}

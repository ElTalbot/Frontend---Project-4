import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";
import "./updateMovementForm.scss";
import ShowMovement from "../showMovement/ShowMovement";

export default function UpdateModal(
  { toggleUpdateModal }: any,
  { user }: { user: null | IUser }
) {
  const navigate = useNavigate();
  const { movementId } = useParams();

  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`${baseUrl}/movements/${movementId}`);

      const movementData = await resp.json();

      setFormData(movementData);
    }
    fetchMovement();
  }, [movementId]);

  const [formData, setFormData] = useState({
    name: "",
    descriptionOne: "",
    descriptionTwo: "",
    descriptionThree: "",
    descriptionFour: "",
    image: "",
    type: "",
    equipment: "",
    video: "",
    adaption: "",
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
    console.log(token);
    const resp = await axios.put(
      `${baseUrl}/movements/${movementId}`,
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    toggleUpdateModal();
    navigate("/movements");
  }

  return (
    <form onSubmit={handleSubmit} className="show-form">
      {/* --------------NAME--------------- */}

      <div className="show-form__all">
        <i className="fas fa-user"></i>
        <input
          className="show-form__input"
          placeholder="Name"
          type="text"
          name={"name"}
          onChange={handleChange}
          value={formData.name}
        />
      </div>

      {/* --------------DESCRIPTIONONE-------------- */}

      <div className="show-form__all">
        <i className="fas fa-1"></i>
        <input
          className="show-form__input"
          placeholder="Description 1"
          type="text"
          name={"descriptionOne"}
          onChange={handleChange}
          value={formData.descriptionOne}
        />
      </div>

      {/* --------------DESCRIPTIONTWO--------------- */}

      <div className="show-form__all">
        <i className="fas fa-2"></i>
        <input
          className="show-form__input"
          placeholder="Description 2"
          type="text"
          name={"descriptionTwo"}
          onChange={handleChange}
          value={formData.descriptionTwo}
        />
      </div>

      {/* --------------DESCRIPTIONTHREE------------- */}

      <div className="show-form__all">
        <i className="fas fa-3"></i>
        <input
          className="show-form__input"
          placeholder="Description 3"
          type="text"
          name={"descriptionThree"}
          onChange={handleChange}
          value={formData.descriptionThree}
        />
      </div>

      {/* --------------DESCRIPTIONFOUR--------------- */}

      <div className="show-form__all">
        <i className="fas fa-4"></i>
        <input
          className="show-form__input"
          placeholder="Description 4"
          type="text"
          name={"descriptionFour"}
          onChange={handleChange}
          value={formData.descriptionFour}
        />
      </div>

      {/* --------------IMAGE-------------------------- */}

      <div className="show-form__all">
        <i className="fas fa-camera"></i>
        <input
          className="show-form__input"
          placeholder="Image url"
          type="text"
          name={"image"}
          onChange={handleChange}
          value={formData.image}
        />
      </div>

      {/* ---------------TYPE--------------------------- */}
      <div className="show-form__all">
        <label className="label">Type</label>
        <div>
          <select
            className="show-form__dropdown"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value={""}>Select an option</option>
            <option value="Strength">Strength</option>
            <option value="Resistance">Resistance</option>
            <option value="Mobilisation">Mobilisation</option>
            <option value="Stretching">Stretching</option>
            <option value="Cardio">Cardio</option>
          </select>
        </div>
      </div>

      {/* ----------------EQUIPMENT=-------------------- */}

      <div className="show-form__all">
        <i className="fas fa-dumbbell"></i>
        <input
          className="show-form__input"
          placeholder="Equipment"
          type="text"
          name={"equipment"}
          onChange={handleChange}
          value={formData.equipment}
        />
      </div>

      {/* --------------VIDEO-------------------------- */}

      <div className="show-form__all">
        <i className="fas fa-photo-film"></i>
        <input
          className="show-form__input"
          placeholder="Video url"
          type="text"
          name={"video"}
          onChange={handleChange}
          value={formData.video}
        />
      </div>

      {/* ----------------ADAPTION=-------------------- */}

      <div className="show-form__all">
        <i className="fas fa-rotate-right"></i>
        <input
          className="show-form__input"
          placeholder="Adaption"
          type="text"
          name={"adaption"}
          onChange={handleChange}
          value={formData.adaption}
        />
      </div>

      <button type="submit" className="show-form__btn">
        Submit
      </button>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={toggleUpdateModal}
      ></button>
    </form>
  );
}

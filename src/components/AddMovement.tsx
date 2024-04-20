import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

export default function AddMovementModal({ onClose }: any) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    descriptionOne: "",
    descriptionTwo: "",
    descriptionThree: "",
    descriptionFour: "",
    descriptionFive: "",
    descriptionSix: "",
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

    const resp = await axios.post(`${baseUrl}/movements`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    onClose();

    navigate("/movements");

    console.log("token", resp);
  }
  return (
    <div className="modal is-active">
      <div className="modal-background">
        <div className="modal-content card p-4">
          <form onSubmit={handleSubmit}>
            <div className="title is-size-2 pl-1 mb-5">Add Movement</div>
            {/* --------------NAME--------------- */}

            <div className="field p-1 mb-1">
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
                  <i className="fas fas fa-user"></i>
                </span>
              </div>
            </div>

            {/* --------------DESCRIPTIONONE-------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Description 1"
                  type="text"
                  name={"descriptionOne"}
                  onChange={handleChange}
                  value={formData.descriptionOne}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-1"></i>
                </span>
              </div>
            </div>
            {/* --------------DESCRIPTIONTWO--------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Description 2"
                  type="text"
                  name={"descriptionTwo"}
                  onChange={handleChange}
                  value={formData.descriptionTwo}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-2"></i>
                </span>
              </div>
            </div>
            {/* --------------DESCRIPTIONTHREE------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Description 3"
                  type="text"
                  name={"descriptionThree"}
                  onChange={handleChange}
                  value={formData.descriptionThree}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-3"></i>
                </span>
              </div>
            </div>
            {/* --------------DESCRIPTIONFOUR--------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Description 4"
                  type="text"
                  name={"descriptionFour"}
                  onChange={handleChange}
                  value={formData.descriptionFour}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-4"></i>
                </span>
              </div>
            </div>
            {/* -------------DESCRIPTIONFIVE---------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Description 5"
                  type="text"
                  name={"descriptionFive"}
                  onChange={handleChange}
                  value={formData.descriptionFive}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-5"></i>
                </span>
              </div>
            </div>
            {/* -------------DESCRIPTIONSIX------------------ */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Description 6"
                  type="text"
                  name={"descriptionSix"}
                  onChange={handleChange}
                  value={formData.descriptionSix}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-6"></i>
                </span>
              </div>
            </div>

            {/* --------------IMAGE-------------------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Image url"
                  type="text"
                  name={"image"}
                  onChange={handleChange}
                  value={formData.image}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-camera"></i>
                </span>
              </div>
            </div>

            {/* ---------------TYPE--------------------------- */}
            <div className="field is-flex is-justify-content-space-between p-1 mb-1">
              <label className="label">Type</label>
              <div className="dropdown is-active">
                <div className="dropdown-trigger">
                  <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                      <div className="select">
                        <select
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
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------EQUIPMENT=-------------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Equipment"
                  type="text"
                  name={"equipment"}
                  onChange={handleChange}
                  value={formData.equipment}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-dumbbell"></i>
                </span>
              </div>
            </div>

            {/* --------------VIDEO-------------------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Video url"
                  type="text"
                  name={"video"}
                  onChange={handleChange}
                  value={formData.video}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-photo-film"></i>
                </span>
              </div>
            </div>

            {/* ----------------ADAPTION=-------------------- */}
            <div className="field p-1 mb-1">
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Adaption"
                  type="text"
                  name={"adaption"}
                  onChange={handleChange}
                  value={formData.adaption}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-rotate-right"></i>
                </span>
              </div>
            </div>

            <button className="button">Submit</button>
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

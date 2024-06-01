import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";
import "./deleteMovementForm.scss";
import ShowMovement from "../showMovement/ShowMovement";
import { IMovement } from "../../interfaces/movement";

export default function DeleteModal(
  { toggleDeleteModal }: any,
  { user }: { user: null | IUser }
) {
  const [movement, setMovement] = React.useState<IMovement | null>(null);
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const { movementId } = useParams();

  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`${baseUrl}/movements/${movementId}`);

      const movementData = await resp.json();
      setMovement(movementData);
      setShowModal(false);
    }
    fetchMovement();
  }, [movementId]);
  // --------------DELETE MOVEMENT--------------------
  async function deleteMovement(e: SyntheticEvent) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${baseUrl}/movements/${movementId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toggleDeleteModal();
      navigate("/movements");
    } catch (e: any) {}
  }

  return (
    <div className="show-form">
      <h4>Are you sure you want to delete {movement && movement.name}?</h4>
      <div className="show-form__buttons">
        <button className="show-form__deletebtn" onClick={deleteMovement}>
          Delete {movement && movement.name} &nbsp;
          <i className="fa fa-trash"></i>
        </button>
        <button onClick={toggleDeleteModal} className="show-form__btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

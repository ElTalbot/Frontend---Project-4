import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";
import ShowMovement from "../showMovement/ShowMovement";
import DeleteMovementForm from "../deleteMovementForm/DeleteMovementForm";
import UpdateMovementForm from "../updateMovementForm/UpdateMovementForm";
import "./deleteMovementModal.scss";

export default function DeleteModal(
  { toggleDeleteModal }: any,
  { user }: { user: null | IUser }
) {
  return (
    <div className="update">
      <section className="update__container">
        <section className="update__content">
          <DeleteMovementForm toggleDeleteModal={toggleDeleteModal} />
        </section>
      </section>
    </div>
  );
}

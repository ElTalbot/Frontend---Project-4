import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";
import ShowMovement from "../showMovement/ShowMovement";
import UpdateMovementForm from "../updateMovementForm/UpdateMovementForm";
import "./updateMovementModal.scss";

export default function UpdateModal(
  { toggleUpdateModal }: any,
  { user }: { user: null | IUser }
) {
  return (
    <div className="update">
      <section className="update__container">
        <section className="update__content">
          <h2>Update Movement</h2>
          <UpdateMovementForm toggleUpdateModal={toggleUpdateModal} />
        </section>
      </section>
    </div>
  );
}

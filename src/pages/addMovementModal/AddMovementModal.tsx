import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";
import AddMovementForm from "../AddMovementForm/AddMovementForm";
import "./addMovementModal.scss";

export default function AddMovementModal(
  { toggleAddModal }: any,
  { user }: { user: null | IUser }
) {
  return (
    <div className="add">
      <section className="add__container">
        <section className="add__content">
          <h2>Add Movement</h2>

          <AddMovementForm toggleAddModal={toggleAddModal} />
        </section>
      </section>
    </div>
  );
}

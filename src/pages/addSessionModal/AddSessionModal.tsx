import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";
import AddSessionForm from "../AddSessionForm/AddSessionForm";
import "./addSessionModal.scss";

export default function AddSessionModal({ toggleAddModal }: any) {
  return (
    <div className="add">
      <section className="add__container">
        <section className="add__content">
          <h2>Add Session</h2>

          <AddSessionForm toggleAddModal={toggleAddModal} />
        </section>
      </section>
    </div>
  );
}

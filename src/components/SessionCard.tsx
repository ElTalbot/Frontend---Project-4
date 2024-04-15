import { ISession } from "../interfaces/session";
import { Link } from "react-router-dom";
import React from "react";

function Session({ id, date, day, capacity, user, name }: ISession) {
  return (
    <Link to={`/sessions/${id}`}>
      <div className="card">
        <div className="card-content">
          <p>{name}</p>
          <p>{day}</p>
          <p>{date}</p>
          <p>{capacity}</p>
        </div>
      </div>
    </Link>
  );
}

export default Session;

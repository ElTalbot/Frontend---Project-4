import { ISession } from "../interfaces/session";
import { Link } from "react-router-dom";
import React from "react";
import { IUser } from "../interfaces/user";

interface SessionProps extends ISession {
  onBook: (id: any) => void;
  onCancel: () => void;
}

function Session({
  id,
  date,
  day,
  capacity,
  user,
  name,
  onBook,
  onCancel,
}: SessionProps) {
  return (
    <div className="card">
      <div className="card-content">
        <p>{name}</p>
        <p>{day}</p>
        <p>{date}</p>
        <p>{capacity}</p>
      </div>
      {user && (
        <span className="icon-text">
          <span className="icon">
            <i className="fa fa-pencil"></i>
          </span>
        </span>
      )}
      <button className="button" onClick={() => onBook(id)}>
        Book
      </button>
    </div>
  );
}

export default Session;

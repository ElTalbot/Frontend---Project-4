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
    <div className="card m-4">
      <div className="card-content sessions is-flex is-flex-direction-column p-4">
        <p className="is-align-self-flex-end is-size-7 is-uppercase">{name}</p>
        <p className="mt-2">
          {day} {date}
        </p>

        {user && (
          <span className="icon-text">
            <span className="icon">
              <i className="fa fa-pencil"></i>
            </span>
          </span>
        )}
        <div className="is-flex is-flex-direction-row mt-2">
          <button className="button book" onClick={() => onBook(id)}>
            Book
          </button>
          <button className="button cancel" onClick={() => onBook(id)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Session;

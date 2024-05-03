import { ISession } from "../interfaces/session";
import { Link } from "react-router-dom";
import React from "react";
import { IUser } from "../interfaces/user";

interface SessionProps extends ISession {
  onBook: (id: any) => void;
  onCancel: (id: any) => void;
  user_booked: boolean;
  sessionNumbers: number;
  user: string;
  session_id: string;
  session_date: string;
  session_day: string;
  session_capacity: number;
  session_name: string;
}

function Session({
  session_id,
  session_date,
  session_day,
  session_capacity,
  user,
  session_name,
  onBook,
  onCancel,
  user_booked,
  sessionNumbers,
}: SessionProps) {
  return (
    <div className="card m-4">
      <div>
        {user && (
          <div>
            <p>{session_name}</p>
            <p>
              {session_day} {session_date}
            </p>
          </div>
        )}

        {user && (
          <span className="icon-text">
            <span className="icon">
              <i className="fa fa-pencil"></i>
            </span>
          </span>
        )}

        <div className="is-flex is-flex-direction-row mt-2">
          {sessionNumbers >= session_capacity ? (
            <p>Fully Booked</p>
          ) : (
            <>
              {!user_booked && (
                <button
                  className="button book"
                  onClick={() => onBook(session_id)}
                >
                  Book
                </button>
              )}
              {user_booked && (
                <button
                  className="button cancel"
                  onClick={() => onCancel(session_id)}
                >
                  Cancel
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Session;

import { ISession } from "../interfaces/session";
import { Link } from "react-router-dom";
import React from "react";
import { IUser } from "../interfaces/user";

interface SessionProps extends ISession {
  onBook: (id: any) => void;
  onCancel: (id: any) => void;
  userBooked: boolean;
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
  userBooked,
}: SessionProps) {
  const [showBookModal, setShowBookModal] = React.useState(false);

  const handleBookClick = () => {
    onBook(id);
    setShowBookModal(true);
  };

  const handleCloseBook = () => {
    setShowBookModal(false);
  };

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
          {!userBooked && (
            <button className="button book" onClick={handleBookClick}>
              Book
            </button>
          )}
          {!userBooked && (
            <button className="button cancel" onClick={() => onCancel(id)}>
              Cancel
            </button>
          )}
        </div>
      </div>

      {showBookModal && (
        <div className="modal is-active">
          <div className="modal-background">
            <div className="modal-content card p-6">
              <h1 className="is-size-4 has-text-centered">
                Thank you for booking on this session - we look forward to
                seeing you there
                <span className="column icon-text is-align-items-center p-0">
                  <span className="icon m-2">
                    <i className="fa-solid fa-face-smile"></i>
                  </span>
                </span>
              </h1>
            </div>
            <button onClick={handleCloseBook}>close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Session;

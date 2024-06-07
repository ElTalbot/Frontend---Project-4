import React from "react";
import { ISession } from "../../interfaces/session";
import axios from "axios";
import "./sessionCard.scss";
import DeleteModal from "../../pages/deleteSessionModal/DeleteSessionModal";
import { baseUrl } from "../../config";

interface SessionProps extends ISession {
  onBook: (id: any) => void;
  onCancel: (id: any) => void;
  fetchSessions: Function;
  user_booked: boolean;
  user: any;
  session_id: string;
  session_date: string;
  session_day: string;
  session_capacity: number;
  session_name: string;
}

const Session: React.FC<SessionProps> = ({
  session_id,
  session_date,
  session_day,
  session_capacity,
  user,
  session_name,
  onBook,
  onCancel,
  user_booked,
  fetchSessions,
}) => {
  const [sessionCount, setSessionCount] = React.useState<number>(0);
  const [showModal, setShowModal] = React.useState(false);

  async function fetchSessionBookings(sessionId: any) {
    const { data } = await axios.get(`${baseUrl}/usersessions/${sessionId}`);
    const userCount = parseInt(data.user_count);
    setSessionCount(userCount);
  }

  React.useEffect(() => {
    fetchSessionBookings(session_id);
    fetchSessions();
  }, [session_id]);

  const toggleDeleteModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="session">
      {user && (
        <div className="session__namedaydate">
          <p className="session__day">{session_day}</p>
          <p className="session__date">{session_date}</p>
          {user.is_admin && (
            <>
              <button
                className="session__delete"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
              {showModal && (
                <DeleteModal
                  toggleDeleteModal={toggleDeleteModal}
                  sessionId={session_id}
                  user={null}
                  fetchSessions={fetchSessions}
                />
              )}
            </>
          )}
        </div>
      )}
      <div className="session__buttons">
        <p className="session__name">
          <i className="fa-solid fa-person-walking"></i>
          &nbsp;{session_name}
        </p>
        {sessionCount >= session_capacity && !user_booked ? (
          <p className="session__full">Fully Booked</p>
        ) : (
          <>
            {!user_booked && (
              <button
                className="session__btn book"
                onClick={() => {
                  onBook(session_id);
                  fetchSessions();
                }}
              >
                <span>Book &nbsp;</span>
                <i className="session__bookicon fa-regular fa-hand-pointer fa-sm"></i>
              </button>
            )}
            {user_booked && (
              <button
                className="session__btn cancel"
                onClick={() => {
                  onCancel(session_id);
                  fetchSessions();
                }}
              >
                <span>Cancel &nbsp;</span>
                <i className="session__cancelicon fa-regular fa-thumbs-up fa-sm"></i>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Session;

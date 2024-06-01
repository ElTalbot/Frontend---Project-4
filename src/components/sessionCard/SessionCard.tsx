import { ISession } from "../../interfaces/session";
import { Link } from "react-router-dom";
import React from "react";
import { IUser } from "../../interfaces/user";
import { baseUrl } from "../../config";
import axios from "axios";
import "./sessionCard.scss";

interface SessionProps extends ISession {
  onBook: (id: any) => void;
  onCancel: (id: any) => void;
  fetchSessions: Function;
  user_booked: boolean;
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
  fetchSessions,
}: SessionProps) {
  const [sessionCount, setSessionCount] = React.useState<number>(0);
  async function fetchSessionBookings(sessionId: any) {
    const { data } = await axios.get(`${baseUrl}/usersessions/${sessionId}`);
    const userCount = parseInt(data.user_count);
    setSessionCount(userCount);
  }
  React.useEffect(() => {
    fetchSessionBookings(session_id);
    fetchSessions();
  }, [session_id]);

  return (
    <div className="session">
      {user && (
        <div className="session__namedaydate">
          <p className="session__day">{session_day}</p>
          <p className="session__date">{session_date}</p>
        </div>
      )}

      <div className="session__buttons">
        {" "}
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
}

export default Session;

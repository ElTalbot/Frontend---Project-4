import React from "react";
import Session from "../../components/sessionCard/SessionCard";
import { ISession } from "../../interfaces/session";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../../interfaces/user";
import { baseUrl } from "../../config";
import axios from "axios";
import "./allSessions.scss";

type Sessions = null | Array<ISession>;

function AllSessions({ user }: { user: null | IUser }) {
  const [sessions, setSessions] = React.useState<Sessions>(null);
  const [book, setBook] = React.useState(null);
  const { sessionId } = useParams();

  // get all sessions on page load
  async function fetchSessions() {
    const token = localStorage.getItem("token");
    const resp = await fetch(`${baseUrl}/sessions`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await resp.json();

    setSessions(data.sessions_with_status);
    // fetch the number of bookings for a specific session
  }
  React.useEffect(() => {
    fetchSessions();

    async function bookSession(sessionId: any) {
      const handleBooking = await fetch(`${baseUrl}/sessions`);
      const data = await handleBooking.json();
      setBook(data);
    }

    bookSession(sessionId);
  }, []);

  // booking a session
  // !! use token to make sure got user and add user to the session

  async function booking(sessionId: any) {
    const token = localStorage.getItem("token");
    const resp = await axios.post(
      `${baseUrl}/sessions/book`,
      { session_id: sessionId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }

  // cancelling a session
  async function cancelling(sessionId: any) {
    const token = localStorage.getItem("token");
    const resp = await axios.delete(`${baseUrl}/sessions/cancel`, {
      data: { session_id: sessionId },
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  // return the sessions cards

  return (
    <>
      <section className="sessions">
        <div className="sessions__title">
          <h1>Sessions</h1>
          <h4>Let's get moving!</h4>
        </div>
        <div className="sessions__cards">
          {sessions?.map((session: any) => {
            return (
              <Session
                key={session.id}
                onBook={() => booking(session.session_id)}
                onCancel={() => cancelling(session.session_id)}
                fetchSessions={fetchSessions}
                user={user}
                {...session}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
export default AllSessions;

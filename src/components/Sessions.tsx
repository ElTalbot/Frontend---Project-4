import React from "react";
import Session from "./SessionCard";
import { ISession } from "../interfaces/session";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../interfaces/user";
import { baseUrl } from "../config";
import axios from "axios";

type Sessions = null | Array<ISession>;

function AllSessions({ user }: { user: null | IUser }) {
  const [sessions, setSessions] = React.useState<Sessions>(null);
  const [book, setBook] = React.useState(null);
  const { sessionId } = useParams();

  // fetch the number of bookings for a specific session
  async function fetchSessionBookings(sessionId: any) {
    const { data } = await axios.get(`${baseUrl}/usersessions/${sessionId}`);
    const userCount = parseInt(data.user_count);
    return userCount;
  }

  // get all sessions on page load
  React.useEffect(() => {
    async function fetchSessions() {
      const token = localStorage.getItem("token");
      const resp = await fetch(`${baseUrl}/sessions`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await resp.json();

      setSessions(data.sessions_with_status);
      console.log(data.sessions_with_status);
    }

    fetchSessions();

    async function bookSession(sessionId: any) {
      const handleBooking = await fetch(`${baseUrl}/sessions`);
      const data = await handleBooking.json();
      setBook(data);
      console.log(data);
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
    console.log("sessionId", sessionId);
  }

  // cancelling a session
  async function cancelling(sessionId: any) {
    const token = localStorage.getItem("token");
    const resp = await axios.delete(`${baseUrl}/sessions/cancel`, {
      data: { session_id: sessionId },
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Sorry to see you have cancelled");
  }

  // return the sessions cards

  return (
    <>
      <section>
        <div>
          {sessions?.map((session: any) => {
            console.log(session.name);
            // const sessionNumbers = fetchSessionBookings(session.id);

            return (
              <Session
                key={session.id}
                onBook={() => booking(session.session_id)}
                onCancel={() => cancelling(session.session_id)}
                user={user}
                // sessionNumbers={sessionNumbers}
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

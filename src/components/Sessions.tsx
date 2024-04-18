import React, { SyntheticEvent } from "react";
import Session from "./SessionCard";
import { ISession } from "../interfaces/session";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../interfaces/user";
import AddSessionModal from "./AddSession";
import axios from "axios";

type Sessions = null | Array<ISession>;

function AllSessions({ user }: { user: null | IUser }) {
  const [sessions, setSessions] = React.useState<Sessions>(null);
  const [showModal, setShowModal] = React.useState(false);
  const [book, setBook] = React.useState(null);
  const { sessionId } = useParams();

  React.useEffect(() => {
    async function fetchsessions() {
      const resp = await fetch("/api/sessions");
      const data = await resp.json();
      setSessions(data);
      setShowModal(false);
      console.log("this is the data: ", data);
    }
    fetchsessions();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // -------------------BOOKING A SESSION------------------

  async function bookSession(sessionId: any) {
    const handleBooking = await fetch(`/api/sessions/${sessionId}`);
    const data = await handleBooking.json();
    setBook(data);
  }
  bookSession(sessionId);

  async function booking(sessionId: any) {
    const token = localStorage.getItem("token");
    const resp = await axios.post(
      "/api/sessions/book",
      { session_id: sessionId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("This is resp is it?", resp);
  }

  return (
    <section className="section is-flex is-flex-direction-column is-justify-self-center mx-6 mt-6">
      <div className="is-flex is-flex-direction-row columns is-multiline column">
        <div className="column is-half pb-0">
          <h1 className="subtitle is-size-2 mb-2">Upcoming Classes</h1>
          <h2 className="subtitle">
            {user && user.username
              ? `Hello ${user?.username}, let’s get booking - explore our upcoming
              classes`
              : "Welcome, explore our upcoming sessions"}
          </h2>
        </div>
        <div className="container p-0 m-0 column is-align-self-flex-end">
          <span className="is-flex is-justify-content-flex-end mt-3">
            {user && (
              <>
                <button
                  className="button book mr-4 mb-o"
                  onClick={() => {
                    setShowModal(true);

                    console.log("hello is this working?");
                  }}
                >
                  Add Session
                  <span className="icon ml-1">
                    <i className="fa fa-plus"></i>
                  </span>
                </button>
                {showModal && <AddSessionModal onClose={handleCloseModal} />}
              </>
            )}
          </span>
        </div>
      </div>

      <div className="columns is-multiline">
        {sessions?.map((session: any) => {
          return <Session key={session.id} onBook={booking} {...session} />;
        })}
      </div>
    </section>
  );
}
export default AllSessions;

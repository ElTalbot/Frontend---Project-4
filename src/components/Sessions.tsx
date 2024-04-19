import React, { SyntheticEvent } from "react";
import Session from "./SessionCard";
import { ISession } from "../interfaces/session";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../interfaces/user";
import AddSessionModal from "./AddSession";
import axios from "axios";
import { baseUrl } from "../config";

type Sessions = null | Array<ISession>;

function AllSessions({ user }: { user: null | IUser }) {
  const [sessions, setSessions] = React.useState<Sessions>(null);
  const [showModal, setShowModal] = React.useState(false);
  const [book, setBook] = React.useState(null);
  const { sessionId } = useParams();
  const [cancel, setCancel] = React.useState(null);

  React.useEffect(() => {
    async function fetchsessions() {
      const resp = await fetch(`${baseUrl}/sessions`);
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

  // async function bookSession(sessionId: any) {
  //   const handleBooking = await fetch(`${baseUrl}/sessions/${sessionId}`);
  //   const data = await handleBooking.json();
  //   setBook(data);
  // }
  // bookSession(sessionId);

  async function booking(sessionId: any) {
    const token = localStorage.getItem("token");
    const resp = await axios.post(
      `${baseUrl}/sessions/book`,
      { session_id: sessionId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // console.log("This is resp is it?", resp);
  }

  // -----------------CANCELLING A SESSION----------------

  // async function cancelSession(sessionId: any) {
  //   const handleCancelling = await fetch(
  //     `${baseUrl}/sessions/${sessionId}`
  //   );
  //   const cancelData = await handleCancelling.json();
  //   setCancel(cancelData);
  // }

  // cancelSession(sessionId);

  async function cancelling(sessionId: any) {
    const token = localStorage.getItem("token");
    console.log("Is this the token I want", token);
    const resp = await axios.delete(`${baseUrl}/sessions/cancel`, {
      data: { session_id: sessionId },
      headers: { Authorization: `Bearer ${token}` },
    });
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
          return (
            <Session
              key={session.id}
              onBook={() => booking(session.id)}
              onCancel={() => cancelling(session.id)}
              {...session}
              userBooked={session.userBooked}
            />
          );
        })}
      </div>
      <section className="is-small mx-4 mt-6 is-flex is-flex-direction-row is-justify-content-space-between">
        <div className="is-align-self-flex-start is-flex">
          <Link to="/">
            <img
              width="64"
              height="16"
              className="navbar-item"
              src="../src/assets/Icon.png"
              alt="Owlcore Icon"
            />
          </Link>
        </div>
        <div className="is-align-content-center">
          <div className="columns is-multiline m-1">
            <div className="mr-2 has-text-centered">
              <Link to="/login">
                <div>Login</div>
              </Link>
            </div>
            <div className="ml-2 has-text-centered">
              <Link to="/signup">
                <div>Signup</div>
              </Link>
            </div>
          </div>

          <div className="has-text-centered">
            <Link to="/about">
              <div>About</div>
            </Link>
          </div>
        </div>
        <div>
          <div className="columns is-multiline is-align-self-center m-2">
            <a
              href="https://www.instagram.com/owlcore3912/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="column icon-text is-align-items-center mr-1 p-0">
                <span className="icon homepage is-medium">
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </span>
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093828954295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="column icon-text is-align-items-center mx-1 p-0">
                <span className="icon homepage is-medium">
                  <i className="fa-brands fa-facebook fa-xl"></i>
                </span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/elizabeth-l-talbot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="column icon-text is-align-items-center ml-1 p-0">
                <span className="icon homepage is-medium">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </span>
              </span>
            </a>
          </div>
          <div className="is-align-self-center">
            <span className="column icon-text is-align-items-center p-0">
              <span className="icon m-0">
                <i className="fa-solid fa-copyright fa-sm"></i>
              </span>
              <span>2023 Owlcore</span>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
export default AllSessions;

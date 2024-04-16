import React from "react";
import Session from "./SessionCard";
import { ISession } from "../interfaces/session";
import { Link } from "react-router-dom";
import { IUser } from "../interfaces/user";

type Sessions = null | Array<ISession>;

function AllSessions({ user }: { user: null | IUser }) {
  const [sessions, setSessions] = React.useState<Sessions>(null);

  React.useEffect(() => {
    async function fetchsessions() {
      const resp = await fetch("/api/sessions");
      const data = await resp.json();
      setSessions(data);
      console.log("this is the data: ", data);
    }
    fetchsessions();
  }, []);

  return (
    <section className="section is-medium is-flex is-flex-direction-column mt-6">
      <h1 className="title">Sessions</h1>
      <h2 className="subtitle">Find the class that is right for you.</h2>
      <div className="container">
        <div className="columns is-multiline">
          {sessions?.map((session: any) => {
            return <Session key={session.id} {...session} />;
          })}
        </div>
      </div>

      <span className="is-flex mt-3">
        {user && (
          <Link to="/addmovement">
            <button className="button is-light is-outlined mr-4">
              Add Session
              <span className="icon ml-1">
                <i className="fa fa-plus"></i>
              </span>
            </button>
          </Link>
        )}
      </span>
    </section>
  );
}
export default AllSessions;

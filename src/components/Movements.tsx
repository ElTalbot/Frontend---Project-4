import React from "react";
import Movement from "./MovementCard";
import { IMovement } from "../interfaces/movement";
import { Link } from "react-router-dom";

type Movements = null | Array<IMovement>;

function AllMovements() {
  const [movements, setMovements] = React.useState<Movements>(null);

  React.useEffect(() => {
    async function fetchmovements() {
      const resp = await fetch("/api/movements");
      const data = await resp.json();
      setMovements(data);
      console.log("this is the data: ", data);
    }
    fetchmovements();
  }, []);

  return (
    <section className="section is-medium is-flex is-flex-direction-column mt-6">
      <h1 className="title">Movements</h1>
      <h2 className="subtitle">Find the movement that is right for you.</h2>
      <div className="container">
        <div className="columns is-multiline">
          {movements?.map((movement: any) => {
            return <Movement key={movement.id} {...movement} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default AllMovements;

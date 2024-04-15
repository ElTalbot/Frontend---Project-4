import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IMovement } from "../interfaces/movement";
import axios from "axios";

function ShowMovement() {
  const [movement, setMovement] = React.useState<IMovement | null>(null);
  const { movementId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`/api/movements/${movementId}`);

      const movementData = await resp.json();
      setMovement(movementData);
      console.log("this is the", movementData);
    }
    fetchMovement();
  }, []);

  if (!movement) {
    return <p>Movement Loading...</p>;
  }
  return (
    <section className="section is-medium container is-widescreen">
      <div className="columns is-multiline">
        <h2 className="column is-size-1">{movement.name}</h2>
        <div className="column is-flex is-justify-content-center is-flex-direction-column">
          <div className="is-flex is-justify-content-space-between">
            <p className="">Type</p>
            <p className="">{movement.type}</p>
          </div>
          <div className="is-flex is-justify-content-space-between">
            <p className="">Equipment</p>
            <p className="">{movement.equipment}</p>
          </div>
        </div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-three-fifths">
          <figure className="image is-16by9">
            <iframe
              className="has-ratio"
              width="1600"
              height="900"
              src={movement.video}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </figure>
        </div>
        <div className="column">
          <div>How do you do {movement.name}</div>
          <div>{movement.descriptionOne}</div>
          <div>{movement.descriptionTwo}</div>
          <div>{movement.descriptionThree}</div>
          <div>{movement.descriptionFour}</div>
          <div>{movement.descriptionFive}</div>
          <div>{movement.descriptionSix}</div>
        </div>
      </div>
      <div>Adaption</div>
      <div>{movement.adaption}</div>
    </section>
  );
}

export default ShowMovement;

import React, { SyntheticEvent } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IMovement } from "../interfaces/movement";
import axios from "axios";
import { IUser } from "../interfaces/user";
import UpdateMovementModal from "./UpdateMovementModal";

function ShowMovement({ user }: { user: null | IUser }) {
  const [movement, setMovement] = React.useState<IMovement | null>(null);
  const [showModal, setShowModal] = React.useState(false);
  const [updateModal, setUpdateModal] = React.useState(false);
  const { movementId } = useParams();
  console.log(movementId);
  const navigate = useNavigate();

  // --------------DELETE MOVEMENT--------------------
  async function deleteMovement(e: SyntheticEvent) {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(movementId);
      await axios.delete(`/api/movements/${movementId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      navigate("/movements");
    } catch (e: any) {
      console.log(e.response.data);
    }
  }

  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`/api/movements/${movementId}`);

      const movementData = await resp.json();
      setMovement(movementData);
      setShowModal(false);
      setUpdateModal(false);
    }
    fetchMovement();
  }, []);

  const handleCloseModal = () => {
    setUpdateModal(false);
  };

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
      <span className="is-flex mt-3">
        {user && (
          <>
            <button
              className="button is-light is-outlined mr-4"
              onClick={() => {
                setUpdateModal(true);

                console.log("hello is this working?");
              }}
            >
              Update Movement
              <span className="icon ml-1">
                <i className="fa fa-plus"></i>
              </span>
            </button>
            {updateModal && <UpdateMovementModal onClose={handleCloseModal} />}
          </>
        )}
      </span>
      {user && (
        <button
          className="button is-danger"
          onClick={() => {
            setShowModal(true);
            console.log("Is this working??");
          }}
        >
          Delete {movement.name}
        </button>
      )}
      {showModal && (
        <div className="modal is-active">
          <div className="modal-background">
            <div className="modal-content">
              <div className="box">
                <h1>Are you sure you want to delete this movement?</h1>

                <button onClick={deleteMovement} className="button is-danger">
                  Delete {movement.name}
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    console.log("working??");
                  }}
                  className="button is-link"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ShowMovement;

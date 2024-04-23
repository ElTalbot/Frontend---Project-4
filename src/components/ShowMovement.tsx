import React, { SyntheticEvent } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IMovement } from "../interfaces/movement";
import axios from "axios";
import { IUser } from "../interfaces/user";
import UpdateMovementModal from "./UpdateMovementModal";
import { baseUrl } from "../config";

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
      await axios.delete(`${baseUrl}/movements/${movementId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      navigate("/movements");
    } catch (e: any) {
      console.log(e.response.data);
    }
  }

  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`${baseUrl}/movements/${movementId}`);

      const movementData = await resp.json();
      setMovement(movementData);
      setShowModal(false);
      setUpdateModal(false);
    }
    fetchMovement();
  }, [user]);

  const handleCloseModal = () => {
    setUpdateModal(false);
  };

  if (!movement && movement) {
    return <p>Movement Loading...</p>;
  }
  return (
    <section className="section is-small ">
      <div className="columns is-multiline">
        <div className="column is-flex is-justify-content-center is-flex-direction-column">
          <h2 className="is-size-1">{movement && movement.name}</h2>
          <div className="type is-flex is-justify-content-space-between">
            <p className="is-uppercase has-text-weight-bold ">Type</p>
            <p>{movement && movement.type}</p>
          </div>
          <div className="type is-flex is-justify-content-space-between">
            <p className="is-uppercase has-text-weight-bold type">Equipment</p>
            <p>{movement && movement.equipment}</p>
          </div>
        </div>
        <div className="column is-flex is-flex-direction-row is-align-items-flex-end is-justify-content-flex-end">
          <span className="is-flex mt-3">
            {user && (
              <>
                <button
                  className="button is-outlined mr-4"
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
                {updateModal && (
                  <UpdateMovementModal onClose={handleCloseModal} />
                )}
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
              Delete {movement && movement.name}
            </button>
          )}
        </div>
      </div>
      <div className="">
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="1600"
            height="900"
            src={movement && movement.video}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </figure>
      </div>
      <div className="mt-5">
        <div className="description is-size-3 mb-2">
          How do you do {movement && movement.name}?
        </div>
        <div className="description">
          <span className=" is-1 icon homepage is-medium">
            <i className="fa-solid fa-1 fa-xl"></i>
          </span>
          <div className="ml-6 mb-3">{movement && movement.descriptionOne}</div>
        </div>
        <div className="description">
          <span className="is-1 icon homepage is-medium">
            <i className="fa-solid fa-2 fa-xl"></i>
          </span>
          <div className="ml-6 mb-s">{movement && movement.descriptionTwo}</div>
        </div>
        <div className="description">
          <span className=" is-1 icon homepage is-medium">
            <i className="fa-solid fa-3 fa-xl"></i>
          </span>
          <div className="ml-6 mb-3">
            {movement && movement.descriptionThree}
          </div>
        </div>
        <div className="description">
          <span className="is-1 icon homepage is-medium">
            <i className="fa-solid fa-4 fa-xl"></i>
          </span>
          <div className="ml-6 mb-3">
            {movement && movement.descriptionFour}
          </div>
        </div>
      </div>

      <div className="box mt-6">
        <div className="is-size-4">Adaption</div>

        <div>{movement && movement.adaption}</div>
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

      {showModal && (
        <div className="modal is-active">
          <div className="modal-background">
            <div className="modal-content card p-4">
              <h1 className="is-size-4 has-text-centered pb-5">
                Are you sure you want to delete this {movement && movement.name}
                ?
              </h1>
              <div className="is-flex is-justify-content-space-between px-6 mb-2">
                <button onClick={deleteMovement} className="button is-danger">
                  Delete {movement && movement.name}
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    console.log("working??");
                  }}
                  className="button is-outlined"
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

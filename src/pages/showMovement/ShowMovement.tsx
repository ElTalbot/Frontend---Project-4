import React, { SyntheticEvent } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IMovement } from "../../interfaces/movement";
import axios from "axios";
import { IUser } from "../../interfaces/user";
import UpdateMovementModal from "../updateMovementModal/UpdateMovementModal";
import DeleteMovementModal from "../deleteMovementModal/DeleteMovementModal";
import { baseUrl } from "../../config";
import "./showMovement.scss";

interface ShowMovementProps {
  user: IUser | null;
  addToFavourites: (movement: IMovement) => void;
  removeFromFavourites: (movement: IMovement) => void;
  isFavorite: (movement: IMovement) => boolean;
}

const ShowMovement: React.FC<ShowMovementProps> = ({
  user,
  addToFavourites,
  removeFromFavourites,
  isFavorite,
}) => {
  const [movement, setMovement] = React.useState<IMovement | null>(null);
  const [showModal, setShowModal] = React.useState(false);
  const [updateModal, setUpdateModal] = React.useState(false);
  const { movementId } = useParams();
  const [isFav, setIsFav] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`${baseUrl}/movements/${movementId}`);

      const movementData = await resp.json();
      setMovement(movementData);
      setShowModal(false);
    }
    fetchMovement();
  }, [user, movementId]);

  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal);
  };
  const toggleDeleteModal = () => {
    setShowModal(!showModal);
  };
  const handleAddToFavourites = () => {
    if (movement) {
      addToFavourites(movement);
      isFavorite(movement);
      setIsFav(true);
    }
  };
  const handleRemoveFromFavourites = () => {
    if (movement) {
      removeFromFavourites(movement);
      setIsFav(false);
    }
  };

  if (!movement && movement) {
    return <p>Movement Loading...</p>;
  }
  return (
    <section className="show">
      <div className="show__header">
        <div className="show__titlelike">
          <h1>{movement && movement.name}</h1>
          {isFav && (
            <button
              className="show__favbtn"
              onClick={handleRemoveFromFavourites}
            >
              <i className="show__heart fa fa-heart fa-xl fa-beat"></i>
            </button>
          )}
          {!isFav && (
            <button className="show__favbtn" onClick={handleAddToFavourites}>
              <i className="show__heart fa-regular fa-heart fa-xl fa-beat"></i>
            </button>
          )}
        </div>

        <div className="show__textbuttons">
          <div className="show__top">
            <p className="show__toptitle">Type</p>
            <p className="show__toptext">{movement && movement.type}</p>
          </div>
          <div className="show__top">
            <p className="show__toptitle">Equipment</p>
            <p className="show__toptext">{movement && movement.equipment}</p>
          </div>
        </div>

        <div className="show__buttons">
          {user && (
            <>
              <button
                className="show__updatebtn"
                onClick={() => {
                  setUpdateModal(true);
                }}
              >
                Update Movement &nbsp;
                <i className="fa fa-pen"></i>
              </button>
              {updateModal && (
                <UpdateMovementModal toggleUpdateModal={toggleUpdateModal} />
              )}
            </>
          )}

          {user && (
            <>
              {" "}
              <button
                className="show__deletebtn"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Delete {movement && movement.name} &nbsp;
                <i className="fa fa-trash"></i>
              </button>
              {showModal && (
                <DeleteMovementModal toggleDeleteModal={toggleDeleteModal} />
              )}
            </>
          )}
        </div>
      </div>
      {movement && movement.video && (
        <figure className="show__video">
          <iframe
            className="show__customvideo"
            width="1600"
            height="900"
            src={movement.video}
            frameBorder={0}
            allowFullScreen
          ></iframe>
        </figure>
      )}

      <h2 className="show__how">How do you do {movement && movement.name}?</h2>
      <div className="show__description">
        <p className="show__numbers">1</p>
        <p>{movement && movement.descriptionOne}</p>
      </div>
      <div className="show__description">
        <p className="show__numbers">2</p>
        <p>{movement && movement.descriptionTwo}</p>
      </div>
      <div className="show__description">
        <p className="show__numbers">3</p>
        <p>{movement && movement.descriptionThree}</p>
      </div>
      <div className="show__description">
        <p className="show__numbers">4</p>
        <p>{movement && movement.descriptionFour}</p>
      </div>

      <div className="show__adaption">
        <h2 className="show__adaptheader">Adaption</h2>

        <p>{movement && movement.adaption}</p>
      </div>
    </section>
  );
};

export default ShowMovement;

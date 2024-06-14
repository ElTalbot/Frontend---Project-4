import { IMovement } from "../../interfaces/movement";
import { Link } from "react-router-dom";
import React from "react";
import "./movementCard.scss";

interface MovementProps extends IMovement {
  addToFavourites: (movement: IMovement) => void;
  removeFromFavourites: (movement: IMovement) => void;
  isFavorite: boolean;
}

const Movement: React.FC<MovementProps> = ({
  id,
  name,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  image,
  type,
  equipment,
  video,
  adaption,
  created_at,
  updated_at,
  user,
  addToFavourites,
  removeFromFavourites,
  isFavorite,
}) => {
  const handleRemoveFromFavourites = () => {
    const currentMovement = {
      id,
      name,
      descriptionOne,
      descriptionTwo,
      descriptionThree,
      descriptionFour,
      image,
      type,
      equipment,
      video,
      adaption,
      created_at,
      updated_at,
      user,
    };
    removeFromFavourites(currentMovement);
  };
  const handleAddToFavourites = () => {
    const currentMovement = {
      id,
      name,
      descriptionOne,
      descriptionTwo,
      descriptionThree,
      descriptionFour,
      image,
      type,
      equipment,
      video,
      adaption,
      created_at,
      updated_at,
      user,
    };
    addToFavourites(currentMovement);
  };
  return (
    <section className="movement">
      {isFavorite && (
        <div className="movement__likebutton">
          <button
            className="movement__like"
            onClick={handleRemoveFromFavourites}
          >
            <i className="movement__heart fa fa-heart"></i>
          </button>
        </div>
      )}
      {!isFavorite && (
        <div className="movement__likebutton">
          <button className="movement__like" onClick={handleAddToFavourites}>
            <i className="movement__heart fa-regular fa-heart"></i>
          </button>
        </div>
      )}
      <Link to={`/movements/${id}`}>
        <div className="movement__top">
          <h3>{name}</h3>
          <p className="movement__type">{type}</p>
        </div>
        <figure className="movement__image">
          <img src={image} alt={name} />
        </figure>

        <div className="movement__equip">
          <p className="movement__type">{equipment}</p>
        </div>
        <p className="movement__description">{descriptionOne}</p>
        <div className="movement__learn">
          Learn more
          <i className="movement__icon fa fa-arrow-right"></i>
        </div>
      </Link>
    </section>
  );
};

export default Movement;

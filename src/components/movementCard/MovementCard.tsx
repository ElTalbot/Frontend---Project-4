import { IMovement } from "../../interfaces/movement";
import { Link } from "react-router-dom";
import React from "react";
import "./movementCard.scss";

function Movement({
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
}: IMovement) {
  return (
    <section className="movement">
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
}

export default Movement;

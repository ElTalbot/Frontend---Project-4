import { IMovement } from "../interfaces/movement";
import { Link } from "react-router-dom";
import React from "react";

function Movement({
  id,
  name,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  descriptionFive,
  descriptionSix,
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
    <div className="column is-one-third-desktop is-one-third-tablet">
      <Link to={`/movements/${id}`}>
        <div className="card">
          <div className="card-header is-justify-content-space-between px-4 pt-3">
            <div className="subtitle is-6 mb-3">{name}</div>
            <div className="title is-7 is-align-content-center is-uppercase mb-2 mt-0">
              {type}
            </div>
          </div>
          <figure className="image is-16by9">
            <img src={image} alt={name} />
          </figure>
          <div className="card-content p-4">
            <div className="is-flex is-flex-direction-column">
              <p className="has-text-weight-bold is-size-7 is-uppercase is-flex is-justify-content-flex-end">
                {equipment}
              </p>
              <div className="is-size-4">Learn your way..</div>
              <div className="is-max-height is-size-6 custom-height is-clipped">
                {descriptionOne}
              </div>
              <span className="icon-text is-flex is-justify-content-flex-end pt-6 underline-hover">
                <span>Learn more</span>
                <span className="icon">
                  <i className="fa fa-arrow-right"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movement;

import React from "react";
import { IMovement } from "../../interfaces/movement";
import Movement from "../../components/movementCard/MovementCard";
import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/user";

import "./favouriteMovements.scss";

interface FavouritesPageProps {
  favourites: IMovement[];
  user: null | IUser;
  removeFromFavourites: (movement: IMovement) => void;
  isFavorite: (movement: IMovement) => boolean;
}

const FavouritesPage: React.FC<FavouritesPageProps> = ({
  favourites,
  user,
  removeFromFavourites,
  isFavorite,
}) => {
  return (
    <section className="favourites">
      <h1 className="favourites__header">Your Favourite Movements</h1>
      <div className="favourites__cards">
        {favourites.length === 0 ? (
          <p>No favourites yet.</p>
        ) : (
          favourites.map((movement: any) => {
            return (
              <Movement
                key={movement.id}
                {...movement}
                user={user}
                removeFromFavourites={removeFromFavourites}
                isFavorite={true}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default FavouritesPage;

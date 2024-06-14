import React from "react";
import Movement from "../../components/movementCard/MovementCard";
import { IMovement } from "../../interfaces/movement";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../../interfaces/user";
import AddMovementModal from "../addMovementModal/AddMovementModal";
import { baseUrl } from "../../config";
import "./allMovements.scss";

interface AllMovementsProps {
  user: null | IUser;
  movements: IMovement[];
  addToFavourites: (movement: IMovement) => void;
  removeFromFavourites: (movement: IMovement) => void;
  isFavorite: (movement: IMovement) => boolean;
}

function AllMovements({
  user,
  movements: initialMovements,
  addToFavourites,
  removeFromFavourites,
  isFavorite,
}: AllMovementsProps) {
  const [allMovements, setAllMovements] =
    React.useState<IMovement[]>(initialMovements);

  const [filteredMovements, setFilteredMovements] =
    React.useState<IMovement[]>(initialMovements);

  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  // Fetch all movements
  React.useEffect(() => {
    async function fetchmovements() {
      const resp = await fetch(`${baseUrl}/movements`);
      const data = await resp.json();
      setAllMovements(data);
      setFilteredMovements(data);
    }
    fetchmovements();
  }, []);

  // Fetch search bar and filter movements
  React.useEffect(() => {
    setFilteredMovements(
      allMovements.filter((movement) => {
        return (
          (search === "" ||
            movement.name.toLowerCase().includes(search.toLowerCase())) &&
          (value === "" || movement.type.toLowerCase() === value.toLowerCase())
        );
      })
    );
  }, [value, search, allMovements]);

  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }

  function handleMovementChange(e: any) {
    setValue(e.currentTarget.value);
  }

  const toggleAddModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="movements">
      <div className="movements__header">
        <h1>Movements</h1>
        <h3>Empower yourself! And explore a world of movements .</h3>
        <div className="movements__searchadd">
          {/* Search bar */}
          <div className="movements__search">
            <input
              className="movements__input"
              id="searchBar"
              placeholder="Search"
              onChange={handleChange}
              value={search}
            />

            {/* Dropdown */}

            <select
              className="movements__dropdown"
              name="type"
              value={value}
              onChange={handleMovementChange}
            >
              <option value={""}>Select type</option>
              <option value="Strength">Strength</option>
              <option value="Resistance">Resistance</option>
              <option value="Mobilisation">Mobilisation</option>
              <option value="Stretching">Stretching</option>
              <option value="Cardio">Cardio</option>
            </select>
          </div>

          {/* Add button */}

          {user && (
            <div className="movements__favbuttons">
              <>
                <Link to={`/favourites`}>
                  <button className="movements__favbtn">
                    My Favourites &nbsp;
                    <i className="movements__heart fa fa-heart"></i>
                  </button>
                </Link>
                <button
                  className="movements__addbtn"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Add
                  <i className="fa fa-plus"></i>
                </button>
                {showModal && (
                  <AddMovementModal toggleAddModal={toggleAddModal} />
                )}
              </>
            </div>
          )}
        </div>
      </div>

      <div className="movements__cards">
        {filteredMovements?.map((movement: any) => {
          return (
            <Movement
              key={movement.id}
              {...movement}
              user={user}
              addToFavourites={addToFavourites}
              isFavorite={isFavorite(movement)}
              removeFromFavourites={removeFromFavourites}
            />
          );
        })}
      </div>
    </section>
  );
}
export default AllMovements;

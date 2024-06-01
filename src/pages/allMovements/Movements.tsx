import React from "react";
import Movement from "../../components/movementCard/MovementCard";
import { IMovement } from "../../interfaces/movement";
import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/user";
import AddMovementModal from "../addMovementModal/AddMovementModal";
import { baseUrl } from "../../config";
import "./allMovements.scss";

type Movements = null | Array<IMovement>;

function AllMovements({ user }: { user: null | IUser }) {
  const [movements, setMovements] = React.useState<Movements>(null);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  // Fetch all movements
  React.useEffect(() => {
    async function fetchmovements() {
      const resp = await fetch(`${baseUrl}/movements`);
      const data = await resp.json();
      setMovements(data);
    }
    fetchmovements();
  }, []);

  // Fetch search bar and filter movements
  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`${baseUrl}/movements?type=${value}`);
      const movementData = await resp.json();
      setMovements(movementData);
    }
    fetchMovement();
  }, [value]);

  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }

  function handleMovementChange(e: any) {
    setValue(e.currentTarget.value);
  }

  function filterMovements() {
    return movements?.filter((movement) => {
      return (
        (search === "" ||
          movement.name.toLowerCase().includes(search.toLowerCase())) &&
        (value === "" || movement.type.includes(value))
      );
    });
  }

  const toggleAddModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="movements">
      <div className="movements__title">
        <h1>Movements</h1>
        <h4>Empower yourself! And explore a world of movements .</h4>
      </div>
      <div>
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
              <option value="Cardop">Cardio</option>
            </select>
          </div>

          {/* Add button */}

          {user && (
            <>
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
          )}
        </div>
      </div>

      <div className="movements__cards">
        {filterMovements()?.map((movement: any) => {
          return <Movement key={movement.id} {...movement} user={user} />;
        })}
      </div>
    </section>
  );
}
export default AllMovements;

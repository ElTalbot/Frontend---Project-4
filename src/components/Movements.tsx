import React from "react";
import Movement from "./MovementCard";
import { IMovement } from "../interfaces/movement";
import { Link } from "react-router-dom";
import { IUser } from "../interfaces/user";
import AddMovementModal from "./AddMovement";

type Movements = null | Array<IMovement>;

function AllMovements({ user }: { user: null | IUser }) {
  const [movements, setMovements] = React.useState<Movements>(null);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  // Fetch all movements
  React.useEffect(() => {
    async function fetchmovements() {
      const resp = await fetch("/api/movements");
      const data = await resp.json();
      setMovements(data);
      setShowModal(false);
      // console.log("this is the data: ", data);
    }
    fetchmovements();
  }, []);

  // Fetch search bar and filter movements
  React.useEffect(() => {
    async function fetchMovement() {
      const resp = await fetch(`api/movements?type=${value}`);
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

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="section is-flex is-flex-direction-column is-justify-self-center mx-6 mt-6">
      <h1 className="subtitle is-size-2 mb-2">Movements</h1>
      <h2 className="subtitle">
        Empower yourself! And explore a world of movements .
      </h2>
      <div className="container is-widescreen m-0">
        <div className="columns is-multiline">
          {/* Search bar */}
          <div className=" searchbar column is-half is-pulled-left ">
            <input
              id="searchBar"
              className="input is-normal"
              placeholder="Search"
              onChange={handleChange}
              value={search}
            />
          </div>
          {/* Dropdown */}
          <div className="field column">
            <div className="dropdown is-active">
              <div className="dropdown-trigger">
                <div className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <div className="select is-hovered">
                      <select
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add button */}
          <span className="is-flex mt-3">
            {user && (
              <>
                <button
                  className="button is-outlined mr-4"
                  onClick={() => {
                    setShowModal(true);

                    console.log("hello is this working?");
                  }}
                >
                  Add Movement
                  <span className="icon ml-1">
                    <i className="fa fa-plus"></i>
                  </span>
                </button>
                {showModal && <AddMovementModal onClose={handleCloseModal} />}
              </>
            )}
          </span>
        </div>
      </div>
      <div className="container">
        <div className="columns is-multiline mt-0">
          {filterMovements()?.map((movement: any) => {
            return <Movement key={movement.id} {...movement} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default AllMovements;

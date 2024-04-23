import React from "react";
import Movement from "./MovementCard";
import { IMovement } from "../interfaces/movement";
import { Link } from "react-router-dom";
import { IUser } from "../interfaces/user";
import AddMovementModal from "./AddMovement";
import { baseUrl } from "../config";
import image from "../assets/Icon.png";

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
      setShowModal(false);
      console.log("user", user?.username);
      // console.log("this is the data: ", data);
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
            return <Movement key={movement.id} {...movement} user={user} />;
          })}
        </div>
      </div>
      <section className="is-small mx-4 mt-6 is-flex is-flex-direction-row is-justify-content-space-between">
        <div className="is-align-self-flex-start is-flex">
          <Link to="/">
            <img
              width="64"
              height="16"
              className="navbar-item"
              src={image}
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
    </section>
  );
}
export default AllMovements;

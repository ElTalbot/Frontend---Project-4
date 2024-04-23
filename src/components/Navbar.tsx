import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/user";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";
import image from "../assets/Icon.png";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

function Navbar({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <header>
      <nav className="navbar-is-transparent is-fixed-top">
        <div className="navbar-menu">
          <div className="navbar-start">
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
          <div className="navbar-end">
            <div className="navbar-item dropdown is-right is-active">
              <div className="dropdown-trigger">
                <button
                  onClick={handleClick}
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa fa-binoculars"></i>
                    </span>
                    <span>Explore</span>
                  </span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              {isOpen && (
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    {user && (
                      <Link
                        to="/sessions"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="navbar-item"
                      >
                        <span className="icon-text">
                          <span className="icon">
                            <i className="fa fa-pen-to-square"></i>
                          </span>
                          <span>Sessions</span>
                        </span>
                      </Link>
                    )}
                    {user && (
                      <Link
                        to="/posts"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="navbar-item"
                      >
                        <span className="icon-text">
                          <span className="icon">
                            <i className="fa fa-people-group"></i>
                          </span>
                          <span>Community</span>
                        </span>
                      </Link>
                    )}
                    <Link
                      to="/movements"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="navbar-item"
                    >
                      <span className="icon-text">
                        <span className="icon">
                          <i className="fa fa-person-walking"></i>
                        </span>
                        <span>Movements</span>
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="navbar-item">
              <span className="icon-text">
                <span className="icon">
                  <i className="fa fa-street-view"></i>
                </span>
                <span>About</span>
              </span>
            </Link>
            {!user && (
              <Link to="/login" className="navbar-item">
                Login
              </Link>
            )}
            {!user && (
              <Link to="/signup" className="navbar-item">
                Sign Up
              </Link>
            )}
            {/* Create a logout button, add a function logout to the onClick */}
            {user && (
              <div className="navbar-item">
                <button
                  onClick={logout}
                  className="button logout has-text-dark is-ghost pl-0"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

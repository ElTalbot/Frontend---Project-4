import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/user";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

function Navbar({ user, setUser }: NavbarProps) {
  console.log("user in the navbar:", user);

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
      <nav className="navbar is-transparent is-fixed-top">
        <div className="navbar-menu">
          <div className="navbar-brand navbar-start">
            <Link to="/">
              <img
                width="64"
                height="16"
                className="navbar-item"
                src="../src/assets/Icon.png"
                alt="Owlcore Icon"
              />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item dropdown is-active">
              <div className="dropdown-trigger">
                <button
                  onClick={handleClick}
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa fa-people-group"></i>
                    </span>
                    <span>Community</span>
                  </span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              {isOpen && (
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <Link to="/sessions" className="navbar-item">
                      <span className="icon-text">
                        <span className="icon">
                          <i className="fa fa-street-view"></i>
                        </span>
                        <span>Sessions</span>
                      </span>
                    </Link>
                    <Link to="/community" className="navbar-item">
                      <span className="icon-text">
                        <span className="icon">
                          <i className="fa fa-street-view"></i>
                        </span>
                        <span>Community</span>
                      </span>
                    </Link>
                    <Link to="/movements" className="navbar-item">
                      <span className="icon-text">
                        <span className="icon">
                          <i className="fa fa-street-view"></i>
                        </span>
                        <span>Movements</span>
                      </span>
                    </Link>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      With a divider
                    </a>
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
              <button
                onClick={logout}
                className="button logout has-text-light navbar-item is-ghost"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

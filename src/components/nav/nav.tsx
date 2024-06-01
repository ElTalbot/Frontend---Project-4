import React, { useState } from "react";
import "./nav.scss";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/user";
import "@fortawesome/fontawesome-free/css/all.css";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

export default function Nav({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }
  const [isNavOpen, setIsNavOpen] = useState(false);

  const clickHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      {/* Logged in user navbar */}
      {user && (
        <div>
          <section className="nav">
            <Link to="/about" className="nav__link">
              <h3 className="nav__text">About</h3>
            </Link>
            <Link to="/sessions" className="nav__link">
              <h3 className="nav__text">Sessions</h3>
            </Link>
            <Link to="/movements" className="nav__link">
              <h3 className="nav__text">Movements</h3>
            </Link>
            <Link to="/posts" className="nav__link">
              <h3 className="nav__text">Community</h3>
            </Link>
            <Link onClick={logout} to="/login" className="nav__link">
              <h3 className="nav__text">Logout</h3>
            </Link>
          </section>
          <section className="mob-nav" onClick={clickHandler}>
            <div className="mob-nav__icon">
              <i className="fa-solid fa-bars fa-2xl"></i>
            </div>
            {isNavOpen && (
              <div className="mob-nav__container">
                <div className="mob-nav__close" onClick={clickHandler}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <Link to="/about" className="nav__link">
                  <h3 className="nav__text">About</h3>
                </Link>
                <Link to="/sessions" className="nav__link">
                  <h3 className="nav__text">Sessions</h3>
                </Link>
                <Link to="/movements" className="nav__link">
                  <h3 className="nav__text">Movements</h3>
                </Link>
                <Link to="/posts" className="nav__link">
                  <h3 className="nav__text">Community</h3>
                </Link>
                <Link to="/login" className="nav__link">
                  <h3 className="nav__text">Logout</h3>
                </Link>
              </div>
            )}
          </section>
        </div>
      )}
      {/* Logged out user navbar */}
      {!user && (
        <div>
          <section className="nav">
            <Link to="/about" className="nav__link">
              <h3 className="nav__text">About</h3>
            </Link>
            <Link to="/movements" className="nav__link">
              <h3 className="nav__text">Movements</h3>
            </Link>
            <Link to="/login" className="nav__link">
              <h3 className="nav__text">Login</h3>
            </Link>
            <Link to="/signup" className="nav__link">
              <h3 className="nav__text">Sign Up</h3>
            </Link>
          </section>
          <section className="mob-nav" onClick={clickHandler}>
            <div className="mob-nav__icon">
              <i className="fa-solid fa-bars fa-2xl"></i>
            </div>
            {isNavOpen && (
              <div className="mob-nav__container">
                <div className="mob-nav__close" onClick={clickHandler}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <Link to="/about" className="nav__link">
                  <h3 className="nav__text">About</h3>
                </Link>
                <Link to="/movements" className="nav__link">
                  <h3 className="nav__text">Movements</h3>
                </Link>
                <Link to="/login" className="nav__link">
                  <h3 className="nav__text">Login</h3>
                </Link>
                <Link to="/signup" className="nav__link">
                  <h3 className="nav__text">Sign Up</h3>
                </Link>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}

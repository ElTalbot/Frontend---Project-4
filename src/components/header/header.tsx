import React, { useState } from "react";
import "./header.scss";
import Nav from "../nav/nav";
import { IUser } from "../../interfaces/user";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/Icon.png";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

export default function Header({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }
  return (
    <header className="header">
      <section className="header__container">
        <div className="header__wrapper">
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

        <div className="header__wrapper header__wrapper--nav">
          <Nav user={user} setUser={setUser} />
        </div>
      </section>
    </header>
  );
}

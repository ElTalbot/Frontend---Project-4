import LoginForm from "../../components/loginForm/loginForm";
import React from "react";
import "./loginPage.scss";
import Divider from "../../components/divider/divider";
import { Link } from "react-router-dom";
import login from "../../assets/login.png";

export default function LoginPage({ fetchUser }: { fetchUser: Function }) {
  return (
    <main className="login">
      <div className="login__container">
        <h2 className="login__title">Log In</h2>
        <LoginForm fetchUser={fetchUser} />
        <div className="login__wrapper">
          <Divider />
          <p className="login__text">Forgotten your password?</p>
          <Link to="/signup" className="link">
            <p className="login__text">Don't have an account? Sign Up</p>
          </Link>
        </div>
      </div>
      <div className="login__container">
        <div className="login__img">
          <img
            width="400"
            height="400"
            src={login}
            alt="Screenshots of all certificates mentioned"
          />
        </div>
      </div>
    </main>
  );
}

import "./loginForm.scss";
import React, { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config";

export default function LoginForm({ fetchUser }: { fetchUser: Function }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };
  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const resp = await axios.post(`${baseUrl}/login`, formData);
    localStorage.setItem("token", resp.data.token);

    fetchUser();

    navigate("/");
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__wrapper">
        <label htmlFor="email" className="login-form__label">
          Email<span className="required">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="login-form__input"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Email"
        />
      </div>
      <div className="login-form__wrapper">
        <label htmlFor="password" className="login-form__label">
          Password<span className="required">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="login-form__input"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Password"
        />
      </div>
      <button className="login-form__btn">Login</button>
    </form>
  );
}

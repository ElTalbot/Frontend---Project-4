import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import "./signupForm.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config";

export default function SignupForm(
  { toggleConsentModal }: any,
  { fetchUser }: { fetchUser: Function }
) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = React.useState(false);
  const [checkError, setCheckError] = React.useState("");

  const [formData, setFormData] = useState({
    username: "",
    surname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const changeHandler = (event: any) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setIsChecked(checked);
      setCheckError("");
      setFormData((prevformData) => ({ ...prevformData, terms: checked }));
    } else {
      setFormData((prevformData) => ({ ...prevformData, [name]: value }));
    }
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!isChecked) {
      setCheckError(
        "Please tick the checkbox if you agree to the terms and conditions"
      );
      return;
    }

    try {
      const resp = await axios.post(`${baseUrl}/signup`, formData);
      if (resp.status === 200) {
        // Send login request using the same credentials
        const loginResp = await axios.post(`${baseUrl}/login`, {
          email: formData.email,
          password: formData.password,
        });

        // Store the authentication token
        localStorage.setItem("token", loginResp.data.token);
        const token = localStorage.getItem("token");

        // Fetch user data (assuming fetchUser fetches user data)
        // fetchUser();

        // Redirect the user to the desired page (e.g., dashboard)
        toggleConsentModal(token);
      } else {
        console.error("Signup failed:", resp.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__container">
        <div className="signup-form__wrapper">
          <label htmlFor="firstName" className="signup-form__label">
            First Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="signup-form__input"
            value={formData.username}
            onChange={changeHandler}
          />
        </div>
        <div className="signup-form__wrapper">
          <label htmlFor="surname" className="signup-form__label">
            Last Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="signup-form__input"
            value={formData.surname}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="email" className="signup-form__label">
          Email<span className="required">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="signup-form__input"
          value={formData.email}
          onChange={changeHandler}
        />
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="phone" className="signup-form__label">
          Phone Number<span className="required">*</span>
        </label>
        <input
          type="text"
          id="number"
          name="number"
          className="signup-form__input"
          value={formData.number}
          onChange={changeHandler}
        />
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="password" className="signup-form__label">
          Password<span className="required">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="signup-form__input"
          value={formData.password}
          onChange={changeHandler}
        />
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="confirmPassword" className="signup-form__label">
          Confirm Password<span className="required">*</span>
        </label>
        <input
          type="confirmPassword"
          id="confirmPassword"
          name="confirmPassword"
          className="signup-form__input"
          value={formData.confirmPassword}
          onChange={changeHandler}
        />
      </div>

      <label className="signup-form__check">
        <div>
          <input type="checkbox" checked={isChecked} onChange={changeHandler} />
          &nbsp; By ticking this box you are accepting the &nbsp;
        </div>
        <div className="signup-form__terms">
          <Link className="signup-form__legal" to="/terms">
            <div> Terms </div>
          </Link>
          &nbsp;and&nbsp;
          <Link className="signup-form__legal" to="/privacy">
            <div> Privacy </div>
          </Link>
          &nbsp;Policy
        </div>
      </label>
      {checkError && <p className="signup-form__error">{checkError}</p>}

      <button className="signup-form__btn">Sign Up</button>
    </form>
  );
}

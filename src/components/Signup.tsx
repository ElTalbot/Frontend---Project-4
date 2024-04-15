import React, { SyntheticEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errorData, setErrorData] = React.useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);

    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
    console.log(formData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault();
      if (formData.password === formData.confirmPassword) {
        const resp = await axios.post("/api/signup", formData);
      }

      navigate("/login");
    } catch (e: any) {
      setErrorData(e.response.data.errors);
    }
  }

  return (
    <div className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={"username"}
                onChange={handleChange}
                value={formData.username}
              />
              {errorData.username && (
                <small className="has-text-danger">{errorData.username}</small>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={"email"}
                onChange={handleChange}
                value={formData.email}
              />
              {errorData.email && (
                <small className="has-text-danger">{errorData.email}</small>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={"password"}
                onChange={handleChange}
                value={formData.password}
              />
              {errorData.password && (
                <small className="has-text-danger">{errorData.password}</small>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={"confirmPassword"}
                onChange={handleChange}
                value={formData.confirmPassword}
              />
              {errorData.confirmPassword && (
                <small className="has-text-danger">
                  {errorData.confirmPassword}
                </small>
              )}
            </div>
          </div>

          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
}

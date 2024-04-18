import React, { SyntheticEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login({ fetchUser }: { fetchUser: Function }) {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);

    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
    console.log(formData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const resp = await axios.post("api/login", formData);
    localStorage.setItem("token", resp.data.token);
    console.log("working?", resp);

    fetchUser();

    navigate("/movements");
  }

  return (
    <div className="section is-flex is-small is-justify-content-center">
      <div className="container add is-max-desktop custom-border-radius p-6 login">
        <h1 className="is-size-4 mb-2 has-text-centered">
          Welcome back to our Owlcore Fitness Community!
        </h1>
        <p className="is-size-6 has-text-centered mb-4">
          Log in now to reconnect and continue your fitness journey.
        </p>
        <form
          className="is-flex is-flex-direction-column"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                name={"email"}
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="field">
            {" "}
            <div className="control">
              <input
                className="input"
                type="password"
                name={"password"}
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>
          <button className="button is-align-self-center">Login</button>
          <div className="is-flex is-justify-content-center mt-4">
            <p className="is-size-7">Don't have an account?</p>
            <p className="ml-2 is-size-7">
              <Link to="/signup">
                <div>Signup</div>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

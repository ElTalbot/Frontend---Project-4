import React, { useState } from "react";
import "./footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/user";
import "@fortawesome/fontawesome-free/css/all.css";
import image from "../../assets/Owlcore Logo.png";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

export default function Footer({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <>
      {/* Logged in user footer */}
      {user && (
        <section className="footer">
          <div>
            <Link to="/">
              <img width="80" height="90" src={image} alt="Owlcore Icon" />
            </Link>
          </div>
          <div>
            <div className="footer__logout">
              <Link onClick={logout} to="/login" className="nav__link">
                <div>Logout</div>
              </Link>
              <Link to="/about">
                <div>About</div>
              </Link>
            </div>
            <div className="footer__copy">
              <Link className="footer__legal" to="/privacy">
                <div>Privacy</div>
              </Link>
              <div className="footer__copyright">
                <span>
                  <i className="fa-solid fa-copyright fa-sm"></i>
                </span>
                <h5 className="footer__copytext">2023 Owlcore</h5>
              </div>
              <Link className="footer__legal" to="/terms">
                <div>Terms</div>
              </Link>
            </div>
          </div>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/owlcore3912/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="fa-brands fa-instagram fa-xl"></i>
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093828954295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="fa-brands fa-facebook fa-xl"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/elizabeth-l-talbot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </span>
            </a>
          </div>
        </section>
      )}
      {/* Logged out user footer */}
      {!user && (
        <section className="footer">
          <div>
            <Link to="/">
              <img width="80" height="10" src={image} alt="Owlcore Icon" />
            </Link>
          </div>
          <div className="footer__link">
            <div className="footer__logsign">
              <Link to="/login">
                <div>Login</div>
              </Link>

              <Link to="/signup">
                <div>Signup</div>
              </Link>
            </div>

            <Link to="/about">
              <div>About</div>
            </Link>
            <div className="footer__copy">
              <span>
                <i className="fa-solid fa-copyright fa-sm"></i>
              </span>
              <h5 className="footer__copytext">2023 Owlcore</h5>
            </div>
          </div>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/owlcore3912/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="fa-brands fa-instagram fa-xl"></i>
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093828954295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="fa-brands fa-facebook fa-xl"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/elizabeth-l-talbot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </span>
            </a>
          </div>
        </section>
      )}
    </>
  );
}

import React from "react";
import { IUser } from "../interfaces/user";
import { Link } from "react-router-dom";

function Home({ user }: { user: null | IUser }) {
  React.useEffect(() => {
    console.log("The Home Page has mounted");
  }, []);

  return (
    <section className="section home m-0">
      <section className="hero is-fullheight is-justify-content-center">
        <div className="">
          {user && (
            <div className="hero-body hometext has-text-centered is-flex-grow-0 custom-border-radius is-flex-direction-column is-align-self-center">
              <div className="is-size-1 has-text-dark title">
                Hello {user?.username},
                <p className="subtitle is-size-4 has-text-dark m-4">
                  Embark on an adventure into a whimsical realm filled with your
                  beloved animals! Chat with fellow animal enthusiasts, discover
                  fascinating tidbits you never knew you craved, and even
                  introduce new animals to the mix!
                </p>
              </div>
            </div>
          )}
          {!user && (
            <section>
              <div className="hero-body hometext has-text-centered is-flex-grow-0 custom-border-radius is-flex-direction-column is-align-self-center">
                <div>
                  <p className="title is-size-1 has-text-dark ">
                    Regular and Flexible Fitness and Movement Sessions{" "}
                  </p>
                  <p className="subtitle is-size-4 has-text-dark m-4">
                    Weekly pay as you go fitness sessions for everyone and
                    anyone no matter your fitness level, background or drive.
                    These sessions are designed to work for YOU
                  </p>
                  <p className="subtitle is-size-4 has-text-dark m-4">
                    Come for a FREE taster session, see what you think, £5 per
                    session thereafter if you like what you experience and
                    decide to come back
                  </p>

                  <Link to="/signup">
                    <button className="button community">Sign Up</button>
                  </Link>
                </div>
                <section>
                  <div className="columns is-multiline">
                    <div className="column is-one-quarter">
                      <div className="subtitle">Adaptions and Progressions</div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="subtitle">Full Body Approach</div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="subtitle">Try Something New</div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="subtitle">To have fun</div>
                    </div>
                  </div>
                </section>
              </div>
              {/* Section for classes */}
              <div className="container">
                Join one of our sessions
                <div className="card-content columns is-multiline">
                  <div className="column is-half">
                    This will be where all the information about the sessions
                    will go in the hoppe that the y will want to sign up??
                  </div>
                  <div className="column is-half">
                    <figure className="image is-128x128">
                      <img src="./src/assets/icon.png" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Section for community */}
              <div className="container">
                Join one of our sessions
                <div className="card-content columns is-multiline">
                  <div className="column is-half">
                    This will be where all the information about the sessions
                    will go in the hoppe that the y will want to sign up??
                  </div>
                  <div className="column is-half">
                    <figure className="image is-128x128">
                      <img src="./src/assets/icon.png" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* Section for Movements */}
              <div className="container">
                Join one of our sessions
                <div className="card-content columns is-multiline">
                  <div className="column is-half">
                    This will be where all the information about the sessions
                    will go in the hoppe that the y will want to sign up??
                  </div>
                  <div className="column is-half">
                    <figure className="image is-128x128">
                      <img src="./src/assets/icon.png" />
                    </figure>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </section>
  );
}

export default Home;

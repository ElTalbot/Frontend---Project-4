import React from "react";
import { IUser } from "../interfaces/user";
import { Link } from "react-router-dom";
import image from "../assets/Icon.png";
import about from "../assets/community.png";
import session from "../assets/session.png";

function Home({ user }: { user: null | IUser }) {
  React.useEffect(() => {
    console.log("The Home Page has mounted");
    console.log("user", user);
  }, []);

  return (
    <section className="mx-6 is-flex is-flex-direction-column">
      <section className="section is-medium">
        <div className="columns is-multiline">
          <div className="column is-two-thirds pr-6">
            <p className="subtitle is-size-1 mb-2 ml-1">
              Join our inclusive fitness community!
            </p>
            <p className="is-size-4 ml-1">
              Step into our vibrant community, whether you're a fitness
              enthusiast or just starting your fitness journey, our classes
              offer a welcoming space for all backgrounds, experiences, and
              fitness levels.
            </p>
            <div>
              <div className="container homeheader my-2">
                <div className="columns is-multiline pb-2 m-0">
                  <span className="column icon-text is-align-items-center p-0">
                    <span className="icon homepage is-medium">
                      <i className="fa-solid fa-compass fa-xl"></i>
                    </span>
                    <span>Adaptions and Progressions</span>
                  </span>
                  <span className="column icon-text is-align-items-center p-0">
                    <span className="icon homepage is-medium">
                      <i className="fa-solid fa-person-walking fa-xl"></i>
                    </span>
                    <span>Full Body Approach</span>
                  </span>
                </div>
                <div className="columns is-multiline m-0">
                  <span className="column icon-text is-align-items-center p-0">
                    <span className="icon homepage is-medium">
                      <i className="fa-solid fa-star fa-xl"></i>
                    </span>
                    <span>Try Something New</span>
                  </span>
                  <span className="column icon-text is-align-items-center p-0">
                    <span className="icon homepage is-medium">
                      <i className="fa-solid fa-face-grin-stars fa-xl"></i>
                    </span>
                    <span>To have fun</span>
                  </span>
                </div>
              </div>
            </div>
            {!user && (
              <Link to="/signup">
                <button className="button community">Sign Up</button>
              </Link>
            )}
            {user && (
              <Link to="/movements">
                <button className="button community">Explore</button>
              </Link>
            )}
          </div>
          <div className="column is-one-third">
            <figure className="image is-128x128">
              <img src={session} alt="Owlcore Logo" />
            </figure>
          </div>
        </div>
      </section>

      {/* Section for classes */}
      <section className="section is-flex is-small mx-6">
        <div className="columns is-multiline">
          <div className="column is-three-fifths pr-6">
            <div className="is-size-2 is-align-self-flex-start">
              Fitness classes for everyone!
            </div>
            <div>
              Come together with like-minded individuals to get moving, have
              fun, and empower each other to reach new heights.
            </div>
            <span className="column icon-text is-align-items-center pl-0 py-1 ">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-hands-holding-circle fa-xl"></i>
              </span>
              <span>Inclusive</span>
            </span>
            <span className="column icon-text is-align-items-center pl-0 py-1">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-ubuntu fa-xl"></i>
              </span>
              <span>Adaptable</span>
            </span>
            <span className="column icon-text is-align-items-center pl-0 py-1">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-universal-access fa-xl"></i>
              </span>
              <span>Accessible</span>
            </span>

            {!user && (
              <Link to="/signup">
                <button className="button community">Sign Up</button>
              </Link>
            )}
            {user && (
              <Link to="/sessions">
                <button className="button community">
                  Find your next class
                </button>
              </Link>
            )}
          </div>
          <div className="column is-two-fifths">
            <figure className="image is-16by9">
              <img src={session} alt="Owlcore Logo" />
            </figure>
          </div>
        </div>
      </section>

      {/* Section for movements */}
      <section className="section is-flex is-small mx-6">
        <div className="columns is-multiline">
          <div className="column is-two-fifths">
            <figure className="image is-16by9">
              <img src={session} alt="Owlcore Logo" />
            </figure>
          </div>
          <div className="column is-three-fifths pr-6">
            <div className="is-size-2 is-align-self-flex-end">
              Unlock a library of movements!
            </div>
            <div>
              Explore a diverse collection of exercises designed for all levels.
              Each movement comes with clear explanations, adaptable variations,
              images, and videos, empowering you to stay active at your own pace
              and convenience. Whether you're a beginner or seasoned enthusiast,
              discover the joy of movement anytime, anywhere
            </div>
            <span className="column icon-text is-align-items-center pl-0 py-1 ">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-person-walking fa-xl"></i>
              </span>
              <span>Self-paced</span>
            </span>
            <span className="column icon-text is-align-items-center pl-0 py-1">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-circle-check fa-xl"></i>
              </span>
              <span>Convenient</span>
            </span>
            <span className="column icon-text is-align-items-center pl-0 py-1">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-arrows-split-up-and-left fa-xl"></i>
              </span>
              <span>Variations</span>
            </span>

            <Link to="/movements">
              <button className="button community">Explore</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section for Community */}
      <section className="section is-flex is-small mx-6">
        <div className="columns is-multiline">
          <div className="column is-three-fifths pr-6">
            <div className="is-size-2 is-align-self-flex-start">
              Welcome to the Owlcore Online Community!
            </div>
            <div>
              Join our online community where you can connect with like-minded
              individuals in a monitored, safe environment. Share your thoughts,
              write encouraging posts, and empower each other on your journey.
              Whether you're seeking support, inspiration, or simply a friendly
              chat, Owlcore is your space to connect, grow, and thrive together.
            </div>
            <span className="column icon-text is-align-items-center pl-0 py-1 ">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-people-group fa-xl"></i>
              </span>
              <span>Support</span>
            </span>
            <span className="column icon-text is-align-items-center pl-0 py-1">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-hands-clapping fa-xl"></i>
              </span>
              <span>Empower</span>
            </span>
            <span className="column icon-text is-align-items-center pl-0 py-1">
              <span className="icon homepage is-medium">
                <i className="fa-solid fa-handshake-simple fa-xl"></i>
              </span>
              <span>Connect</span>
            </span>

            {!user && (
              <Link to="/signup">
                <button className="button community">Sign Up</button>
              </Link>
            )}
            {user && (
              <Link to="/posts">
                <button className="button community">
                  Discover your community
                </button>
              </Link>
            )}
          </div>
          <div className="column is-two-fifths">
            <figure className="image is-16by9">
              <img src={about} alt="Owlcore Logo" />
            </figure>
          </div>
        </div>
      </section>
      <section className="is-small mx-4 mt-6 is-flex is-flex-direction-row is-justify-content-space-between">
        <div className="is-align-self-flex-start is-flex">
          <Link to="/">
            <img
              width="64"
              height="16"
              className="navbar-item"
              src={session}
              alt="Owlcore Icon"
            />
          </Link>
        </div>
        <div className="is-align-content-center">
          <div className="columns is-multiline m-1">
            <div className="mr-2 has-text-centered">
              <Link to="/login">
                <div>Login</div>
              </Link>
            </div>
            <div className="ml-2 has-text-centered">
              <Link to="/signup">
                <div>Signup</div>
              </Link>
            </div>
          </div>

          <div className="has-text-centered">
            <Link to="/about">
              <div>About</div>
            </Link>
          </div>
        </div>
        <div>
          <div className="columns is-multiline is-align-self-center m-2">
            <a
              href="https://www.instagram.com/owlcore3912/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="column icon-text is-align-items-center mr-1 p-0">
                <span className="icon homepage is-medium">
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </span>
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093828954295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="column icon-text is-align-items-center mx-1 p-0">
                <span className="icon homepage is-medium">
                  <i className="fa-brands fa-facebook fa-xl"></i>
                </span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/elizabeth-l-talbot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="column icon-text is-align-items-center ml-1 p-0">
                <span className="icon homepage is-medium">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </span>
              </span>
            </a>
          </div>
          <div className="is-align-self-center">
            <span className="column icon-text is-align-items-center p-0">
              <span className="icon m-0">
                <i className="fa-solid fa-copyright fa-sm"></i>
              </span>
              <span>2023 Owlcore</span>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;

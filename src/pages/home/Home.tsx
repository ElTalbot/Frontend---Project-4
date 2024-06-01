import React from "react";
import { IUser } from "../../interfaces/user";
import { Link } from "react-router-dom";
import image from "../../assets/Icon.png";
import catalogue from "../../assets/catalogue.png";
import everyone from "../../assets/everyone.png";
import community from "../../assets/community.png";
import adaption from "../../assets/adaption.png";
import full from "../../assets/full.png";
import trynew from "../../assets/new.png";
import fun from "../../assets/fun.png";
import onthego from "../../assets/onthego.png";
import "./home.scss";

function Home({ user }: { user: null | IUser }) {
  React.useEffect(() => {}, []);

  return (
    <section className="home">
      <div className="home__hero">
        <h1 className="home__header">
          Join our <span className="home__uppercase">inclusive</span> fitness
          community!
        </h1>
        <h4 className="home__text">
          Step into our vibrant community, <br /> Whether you're a fitness
          enthusiast or just starting your fitness journey, our classes offer a{" "}
          <br />{" "}
          <span className="home__highlight">welcoming space for all</span>{" "}
          backgrounds, experiences, and fitness levels.
        </h4>

        <div className="home__keywords">
          <div className="home__rowkeywords">
            <div className="home__keyword">
              <figure>
                <img
                  className="home__smallimage"
                  src={adaption}
                  alt="2 cogs icon"
                />
              </figure>

              <h5 className="home__word">Adaptions and Progressions</h5>
            </div>

            <div className="home__keyword">
              <figure>
                <img
                  className="home__smallimage"
                  src={full}
                  alt="Person jumping icon"
                />
              </figure>

              <h5 className="home__word">Full Body Approach</h5>
            </div>
          </div>
          <div className="home__rowkeywords">
            <div className="home__keyword">
              <figure>
                <img
                  className="home__smallimage"
                  src={trynew}
                  alt="Sparkling stars icon"
                />
              </figure>

              <h5 className="home__word">Try Something New</h5>
            </div>

            <div className="home__keyword">
              <figure>
                <img
                  className="home__smallimage"
                  src={fun}
                  alt="Smiling Face icon"
                />
              </figure>
              <h5 className="home__word">To Have Fun</h5>
            </div>
            <div className="home__keyword">
              <figure>
                <img
                  className="home__smallimage"
                  src={onthego}
                  alt="Phone icon"
                />
              </figure>
              <h5 className="home__word">Pay As You Go</h5>
            </div>
          </div>
        </div>
        {!user && (
          <Link to="/signup">
            <button className="home__btn">Sign Up</button>
          </Link>
        )}
        {user && (
          <Link to="/movements">
            <button className="home__btn">Explore</button>
          </Link>
        )}
      </div>

      {/* Section for classes */}

      <div className="home__feature">
        <div className="home__featuremove">
          <div>
            <p className="home__featurekeywords">
              Inclusive, Adaptable, Accessible
            </p>
            <h2>Fitness classes for everyone!</h2>
            <h5>
              Come together with like-minded individuals to get{" "}
              <span className="home__highlight">moving</span>, have{" "}
              <span className="home__highlight">fun</span>, and{" "}
              <span className="home__highlight">empower</span> each other to
              reach new heights.
            </h5>
          </div>
          <div>
            {!user && (
              <Link to="/signup">
                <button className="home__btn">Sign Up</button>
              </Link>
            )}
            {user && (
              <Link to="/sessions">
                <button className="home__btn">Find your next class</button>
              </Link>
            )}
          </div>
        </div>
        <div>
          <figure>
            <img
              className="home__imageright"
              src={everyone}
              alt="Owlcore Logo"
            />
          </figure>
        </div>
      </div>

      {/* Section for movements */}
      <div className="home__featureleft">
        <div className="home__featuremoveleft">
          <div>
            <p className="home__featurekeywordsleft">
              Self-paced, Convenient, Variations
            </p>
            <h2 className="home__featurewordsleft">
              Unlock a library of movements!
            </h2>
            <h5 className="home__featurewordsleft">
              Explore a diverse collection of exercises designed for{" "}
              <span className="home__highlight">all levels</span>. Every
              movement comes with clear explanations, adaptable variations,
              images, and videos, empowering you to stay active at{" "}
              <span className="home__highlight">your own pace</span> and
              convenience. Whether you're a beginner or seasoned enthusiast,
              discover the joy of movement anytime,{" "}
              <span className="home__highlight">anywhere</span>
            </h5>
          </div>
          <div>
            {!user && (
              <Link to="/signup">
                <button className="home__btn">Sign Up</button>
              </Link>
            )}
            {user && (
              <Link to="/movements">
                <button className="home__btn">Explore</button>
              </Link>
            )}
          </div>
        </div>
        <div>
          <figure>
            <img
              className="home__imageleft"
              src={catalogue}
              alt="Owlcore Logo"
            />
          </figure>
        </div>
      </div>

      {/* Section for Community */}
      <div className="home__feature">
        <div className="home__featuremove">
          <div>
            <p className="home__featurekeywords">Support, Empower, Connect</p>
            <h2>Welcome to the Owlcore Online Community!</h2>
            <h5>
              Join our online community where you can connect with{" "}
              <span className="home__highlight">like-minded</span>
              individuals in a monitored,{" "}
              <span className="home__highlight">safe environment.</span> Share
              your thoughts, write encouraging posts, and empower each other on
              your journey. Whether you're seeking support, inspiration, or
              simply a <span className="home__highlight">friendly chat</span>,
              Owlcore is your space to connect, grow, and thrive together.
            </h5>
          </div>
          <div>
            {!user && (
              <Link to="/signup">
                <button className="home__btn">Sign Up</button>
              </Link>
            )}
            {user && (
              <Link to="/community">
                <button className="home__btn">Discover your community</button>
              </Link>
            )}
          </div>
        </div>
        <div>
          <figure>
            <img src={community} alt="Owlcore Logo" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Home;

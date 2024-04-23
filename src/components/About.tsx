import React from "react";
import image from "../assets/Icon.png";

import { Link } from "react-router-dom";

function About() {
  React.useEffect(() => {
    console.log("The About Page has mounted");
  }, []);

  return (
    <section className="mx-6 is-flex is-flex-direction-column">
      <section className="section is-medium">
        <div className="">
          <section>
            <div className="hero-body hometext has-text-centered is-flex-grow-0 custom-border-radius is-flex-direction-column is-align-self-center">
              <div>
                <p className="title is-size-1 has-text-dark ">
                  Your Local Neighbourhood Fitness Community
                </p>
                <p className="subtitle is-size-4 has-text-dark m-4">
                  We are a friendly community built on the foundations of a
                  drive to get people moving, in a way they themselves feel
                  comfortable.
                </p>
                <p className="subtitle is-size-4 has-text-dark m-4">
                  Everyone is unique and moves in their own way and the Owlcore
                  Community strives to nurture that uniqueness and bring
                  together that drive to get moving and a safe place to do so in
                  a comfortable, welcoming space
                </p>
              </div>
            </div>
            <div className="container">
              <h1 className="is-size-2 mb-2">Owlcore at it's heart</h1>
              <div>
                <p className="is-size-5 my-4">
                  Herewith begin the tale as old as.. well.. the origin of
                  Owlcore
                </p>
                <p>
                  Let me start by painting the scene - It’s{" "}
                  <span className="is-uppercase is-size-4">March 2020, </span>
                  there is a worldwide{" "}
                  <span className="is-uppercase is-size-4">lockdown</span>, a
                  mass{" "}
                  <span className="is-uppercase is-size-4">
                    shutting of borders
                  </span>
                  , a small town in the middle of New South Wales{" "}
                  <span className="is-uppercase is-size-4">Australia</span>, a
                  deserted, quiet{" "}
                  <span className="is-uppercase is-size-4">holiday park</span>,
                  housing an isolated holiday
                  <span className="is-uppercase is-size-4">cabin</span> and at
                  this moment in time home to 3 stranded British Tourists with
                  currently no way of returning home
                </p>
                <h2>3 Stranded Tourists</h2>
                <p>
                  I will caveat this by saying I promise I have absolutely no
                  intention of downplaying the seriousness of what the past few
                  years has been. I just want to paint a true picture of where
                  Owlcore originated and why it has grown to be what it is
                  today.
                </p>
                <p>
                  Back to the stranded tourists who find themselves in a holiday
                  cabin in a pretty spectacular yet rural part of Australia -
                  when / if they would return home to be in at least the same
                  country as their loved ones was unknown creating a great sense
                  of uncertainty among the 3 tourists. Thankfully there was an
                  optimistic tourist amongst the group who had an idea (and with
                  no other choice but to go with the changing guidelines facing
                  them AND with simply nothing else to do) this idea seemed like
                  the best thing to do at the time.
                </p>
                <h2>An optimistic tourist..</h2>
                <h3>The idea?? </h3>
                <p>
                  To find something else to focus on and to make the best of an
                  uncertain situation - weighing up what was on offer it was
                  decided a group circuit was holistically the best idea. Little
                  did they know the impact this idea would have not only in that
                  moment but through every stage of the years that were to
                  follow, to this current day and onward.
                </p>
                <h2> Fast forward </h2>
                <p>
                  Fast forward through 3 years of intermittent lock downs, 1
                  zoom account, 3 giggly sisters, 1 childhood friend, 4 living
                  rooms, 8 baked bean cans, 5 freed up calendars, 1 ever
                  evolving catalogue of circuit routines..
                </p>
                <h2>to</h2>
                <p>
                  5 years of study resulting in necessary qualifications (see
                  below), the lifting of lock downs, the reintroduction of in
                  person get togethers, the understanding nature of the local
                  church, the endless support of family{" "}
                </p>
                <h2>AND </h2>
                <p>
                  an open armed, welcoming community We find ourselves in the
                  depths of the growing Owlcore Community that's foundations
                  settled close to home - and whose drive to grow will never
                  diminish the drive to create a safe and inclusive space for
                  anyone no matter their experience, background or ability to
                  join and just get moving, their way whilst surrounded by like
                  minded people. There is also a lot of laughter.{" "}
                </p>
                <div>
                  <h2>The Aforementioned Qualifications</h2>
                  <div className="columns">
                    <p className="column is-half">
                      Level 2 Gym Instructor Level 3 PT Training Level 3 Diploma
                      in Exercise Referral Level 4 Lower Back Pain Specialist
                      Suspension Training Functional Training Circuit Training
                      Core Training
                    </p>
                    <div className="column is-half">
                      <figure className="image is-128x128">
                        <img src={image} alt="Owlcore Logo" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default About;

import React from "react";
import quals from "../../assets/certs.png";
import "./about.scss";

import { Link } from "react-router-dom";

function About() {
  React.useEffect(() => {
    console.log("The About Page has mounted");
  }, []);

  return (
    <section className="about">
      <h1 className="about__header">
        Your Local Neighbourhood Fitness Community
      </h1>
      <h3 className="about__text">
        We are a friendly community built on the foundations of a drive to get
        people moving, in a way they themselves feel comfortable.
      </h3>

      <div className="about__story">
        <p>
          Everyone is unique and moves in their own way and the Owlcore
          Community strives to <span className="about__highlight">nurture</span>{" "}
          that uniqueness and bring together that drive to get moving and a safe
          place to do so in a{" "}
          <span className="about__highlight">comfortable, welcoming space</span>
        </p>
        <div className="about__section">
          <h2>Owlcore at it's heart</h2>
          <p>
            Herewith begin the tale as old as.. well.. the origin of Owlcore{" "}
            <br />
            <br />
            Let me start by painting the scene - It’s{" "}
            <span className="about__bold">March 2020, </span>
            there is a worldwide <span className="about__bold">lockdown</span>,
            a mass <span className="about__bold">shutting of borders</span>, a
            small town in the middle of New South Wales{" "}
            <span className="about__bold">Australia</span>, a deserted, quiet{" "}
            <span className="about__bold">holiday park</span>, housing an
            isolated holiday <span className="about__bold">cabin</span> and at
            this moment in time home to 3 stranded British Tourists with
            currently no way of returning home
          </p>
        </div>
        <div className="about__section">
          <h2>3 Stranded Tourists</h2>
          <p className="about__caveat">
            I will caveat this by saying I promise I have absolutely no
            intention of downplaying the seriousness of what the past few years
            has been. I just want to paint a true picture of where Owlcore
            originated and why it has grown to be what it is today.
          </p>
          <p>
            Back to the stranded tourists who find themselves in a holiday cabin
            in a pretty spectacular yet rural part of Australia -{" "}
            <span className="about__bold">when / if </span>they would{" "}
            <span className="about__bold">return</span> home to be in at least
            the same country as their loved ones was unknown creating a great
            sense of uncertainty among the 3 tourists. <br />
            <br />
            Thankfully there was an optimistic tourist amongst the group who had
            an idea (and with no other choice but to go with the changing
            guidelines facing them <span className="about__bold">AND</span> with
            simply nothing else to do) this idea seemed like the best thing to
            do at the time.
          </p>
        </div>
        <div className="about__section">
          <h2>An optimistic tourist..</h2>
          <p>
            <span className="about__bold">The idea??</span> To find something
            else to focus on and to make the best of an uncertain situation -
            weighing up what was on offer it was decided a{" "}
            <span className="about__bold">group circuit</span> was{" "}
            <span className="about__bold">holistically </span>
            the best idea. <br />
            <br />
            Little did they know the impact this idea would have not only in
            that moment but through every stage of the years that were to
            follow, to this current day and onward.
          </p>
        </div>
        <div className="about__section">
          <i className="about__icon fa-solid fa-forward-fast fa-xl">
            <h2 className="about__fast"> Fast forward </h2>
          </i>

          <p>
            Fast forward through <span className="about__bold">3</span> years of
            intermittent <span className="about__bold">lock downs</span>, <br />
            <span className="about__bold">1 zoom</span> account, <br />
            <span className="about__bold">3</span> giggly{" "}
            <span className="about__bold">sisters</span>, <br />
            <span className="about__bold">1</span> childhood{" "}
            <span className="about__bold">friend</span>, <br />
            <span className="about__bold">4</span> living{" "}
            <span className="about__bold">rooms</span>, <br />
            <span className="about__bold">8</span> baked bean{" "}
            <span className="about__bold">cans</span>, <br />
            <span className="about__bold">5 freed</span> up{" "}
            <span className="about__bold">calendars</span>, <br />
            <span className="about__bold">1</span> ever evolving{" "}
            <span className="about__bold">catalogue</span> of circuit routines..
          </p>
          <i className="about__icon fa-solid fa-arrow-trend-up fa-xl">
            {" "}
            <h2 className="about__fast">to</h2>
          </i>

          <p>
            <span className="about__bold">5</span> years of{" "}
            <span className="about__bold">study</span> resulting in the
            necessary qualifications (see below), <br />
            the <span className="about__bold">lifting</span> of{" "}
            <span className="about__bold">lock downs</span>, <br />
            the <span className="about__bold">reintroduction</span>
            of in person get <span className="about__bold">
              togethers
            </span>, <br />
            the understanding nature of the{" "}
            <span className="about__bold">local church</span>, <br />
            the endless
            <span className="about__bold">support</span> of{" "}
            <span className="about__bold">family</span>{" "}
          </p>
          <i className="about__icon fa-solid fa-paper-plane fa-xl">
            {" "}
            <h2 className="about__fast">AND </h2>
          </i>

          <p>
            an open armed,{" "}
            <span className="about__bold">welcoming community</span> <br />
            <br /> We find ourselves in the depths of the growing Owlcore
            Community that's <span className="about__bold">
              foundations
            </span>{" "}
            settled close to <span className="about__bold">home</span> - and
            whose drive to grow will never diminish the drive to create a{" "}
            <span className="about__bold">safe</span>
            and <span className="about__bold">inclusive</span> space for anyone
            no matter their experience, background or ability to join and just
            <span className="about__bold">get moving, their way</span> whilst
            surrounded by like minded people. <br />
            <br />
            There is also a lot of <span className="about__bold">laughter</span>
            .{" "}
          </p>
        </div>
        <h2>The Aforementioned Qualifications</h2>
        <div className="about__quals">
          <p className="about__qual">
            Level 2 <span className="about__bold">Gym Instructor</span> <br />
            Level 3 <span className="about__bold">PT Training</span> <br />
            Level 3 Diploma in{" "}
            <span className="about__bold">Exercise Referral</span> <br />
            Level 4 <span className="about__bold">Lower Back Pain</span>{" "}
            Specialist <br />
            <span className="about__bold">Suspension</span> Training <br />
            <span className="about__bold">Functional</span>
            Training <br />
            <span className="about__bold">Circuit</span> Training <br />
            <span className="about__bold">Core</span> Training
          </p>
          <img
            width="500"
            height="500"
            src={quals}
            alt="Screenshots of all certificates mentioned"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

import ParqForm from "../parqForm/parqForm";
import "./parqModal.scss";
import React, { useState } from "react";

export default function ParqModal({ toggleParqModal }: any) {
  return (
    <div className="parq">
      <section className="parq__container">
        <section className="parq__content">
          <h2 className="parq__title">
            PAR-Q+ <br />
            The Physical Activity Readiness Questionnaire for everyone
          </h2>
          <p className="parq__text">
            The health benefits of regular physical activity are clear; more
            people should engage in physical activity every day of the week.
            Participating in physical activity is very safe for MOST people.
            This questionnaire will tell you whether it is necessary for you to
            seek further advice from your doctor or a qualified exercise
            professional before becoming more physically active.
          </p>
          <ParqForm toggleParqModal={toggleParqModal} />
        </section>
      </section>
    </div>
  );
}

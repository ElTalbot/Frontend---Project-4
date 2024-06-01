import React from "react";
import "./consentModal.scss";
import ConsentForm from "../consentForm/consentForm";
import { IUser } from "../../interfaces/user";

export default function ConsentModal(
  { toggleConsentModal, toggleParqModal }: any,
  { user }: { user: null | IUser }
) {
  console.log(user);
  return (
    <div className="consent">
      <section className="consent__container">
        <section className="consent__content">
          <h2 className="consent__title">
            Circuits Programme Informed Consent
          </h2>
          <p className="consent__text">
            I consent to voluntarily participate in a group circuit class, and
            agree that I have been given ample opportunity to ask questions and
            to inform the trainer of any medical requirements that may be
            exacerbated by the involvement in a circuits class
          </p>
          <h3 className="consent__subtitle">Group Circuit Programme</h3>
          <p className="consent__text">
            I understand that this circuit programme is designed to accommodate
            a variety of individuals with different needs, abilities and fitness
            levels. I understand that this circuit programme will involve
            participation in a number of different exercises that will most
            likely include: - Aerobic activities including but not limited to
            shuttle runs, step exercises, jumps and fast feet that will
            progressively challenge your cardiorespiratory and musculoskeletal
            systems (heart, lungs, muscles and joints). - Muscular strength and
            endurance activities including but not limited to squats, wall
            pushes, lunges and bicep curls - Other activities that may include
            resistance bands, cones, free weights and other exercise equipment
            that facilitate the exercises chosen by the trainer You may feel
            tired during and following the exercise sessions, and occasionally
            experience some soreness, but this is not unusual and you will be
            monitored closely. I understand I need to consult my instructor if I
            have any concerns.
          </p>
          <h3 className="consent__subtitle">Potential Risks</h3>
          <p className="consent__text">
            I understand that no exercise class is without inherent risks
            regardless of the care taken and risk assessments implemented by the
            instructor and that my personal safety cannot be guaranteed by the
            instructor. I am aware that the participation in any exercise
            especially those involving cardiovascular stress can result in a
            slight chance of serious injury (eg heart attack, stroke, or other
            cardiovascular accidents) or catastrophic incident (eg death,
            paralysis) With this is the involvement in muscular endurance or
            strength exercises and other fitness activities can sometimes result
            in minor injuries (including but not limited to bruises, strains,
            sprains) and less frequent, more serious injuries again including
            but not limited to muscle tears, herniated discs and torn ligaments
            and rarely catastrophic incidents (death, paralysis) I understand
            that all exercises will be clearly demonstrated both verbally and
            visually and will be given an opportunity to ask questions where
            necessary - similarly the use of any equipment will be clearly
            explained and only used where appropriate
          </p>
          <h3 className="consent__subtitle">Participant Responsibilities</h3>
          <p className="consent__text">
            I understand that it is my responsibility to;
          </p>
          <ol className="consent__list">
            <li className="consent__item">
              Fully disclose any health issues or medication relevant to my
              involvement and participation in a physical exercise circuits
              class;
            </li>
            <li className="consent__item">
              Cease participation in exercise and report immediately any unusual
              feelings including but not limited to chest discomfort, nausea,
              difficulty breathing, apparent injury during the circuits class
              and;
            </li>
            <li className="consent__item">
              Clear my involvement and participation with my doctor
            </li>
          </ol>
          <h3 className="consent__subtitle">Participant Understanding</h3>
          <ConsentForm
            toggleConsentModal={toggleConsentModal}
            toggleParqModal={toggleParqModal}
          />
        </section>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import Divider from "../../components/divider/divider";
import SignupForm from "../../components/signupForm/signupForm";
import "./signuppage.scss";
import React, { useState } from "react";
import ConsentModal from "../../components/consentModal/consentModal";
import ParqModal from "../../components/parqModal/parqModal";

export default function SignupPage() {
  const [consentModal, setConsentModal] = useState(false);

  const toggleConsentModal = () => {
    setConsentModal(!consentModal);
  };

  const [parqModal, setParqModal] = useState(false);

  const toggleParqModal = () => {
    setParqModal(!parqModal);
  };

  return (
    <main className="signup">
      <div className="signup__container">
        <h2 className="signup__title">Join the Community</h2>
      </div>
      <SignupForm toggleConsentModal={toggleConsentModal} />
      <div className="signup__wrapper">
        <Divider />
        <Link to="/login" className="link">
          <p className="signup__text">Already have an account? Log in</p>
        </Link>
      </div>
      {consentModal && (
        <ConsentModal
          toggleConsentModal={toggleConsentModal}
          toggleParqModal={toggleParqModal}
        />
      )}
      {parqModal && <ParqModal toggleParqModal={toggleParqModal} />}
    </main>
  );
}

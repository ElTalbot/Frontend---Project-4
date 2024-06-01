import React, { SyntheticEvent, useState } from "react";
import "./consentForm.scss";
import Divider from "../divider/divider";
import axios from "axios";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";

export default function ConsentForm(
  { toggleConsentModal, toggleParqModal }: any,
  { user }: { user: null | IUser }
) {
  const [formData, setFormData] = useState({
    question_one: false,
    question_two: false,
    question_three: false,
    question_four: false,
    question_five: false,
    question_six: false,
    question_seven: false,
    question_eight: false,
    name: "",
    email: "",
    date: "",
    signed: "",
  });

  const changeChecked = (event: any) => {
    const { name, checked } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: checked }));
  };

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const resp = await axios.post(`${baseUrl}/consentforms`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("respy", resp);

    toggleConsentModal();
    toggleParqModal(token);
  };
  return (
    <form onSubmit={handleSubmit} className="consent-form">
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_one" className="consent-form__label">
          I understand that my participation is completely voluntary
        </label>
        <input
          type="checkbox"
          id="question_one"
          name="question_one"
          className="consent-form__input-checkbox"
          checked={formData.question_one}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_two" className="consent-form__label">
          I am aware and understand the potential risks involved in this
          circuits program and have been given ample opportunity to ask
          questions as necessary
        </label>
        <input
          type="checkbox"
          id="question_two"
          name="question_two"
          className="consent-form__input-checkbox"
          checked={formData.question_two}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_three" className="consent-form__label">
          I give consent to certain physical touching that may be necessary to
          ensure proper technique and body aligned
        </label>
        <input
          type="checkbox"
          id="question_three"
          name="question_three"
          className="consent-form__input-checkbox"
          checked={formData.question_three}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_four" className="consent-form__label">
          I understand that the achievement of health or fitness goals cannot be
          guaranteed
        </label>
        <input
          type="checkbox"
          id="question_four"
          name="question_four"
          className="consent-form__input-checkbox"
          checked={formData.question_four}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_five" className="consent-form__label">
          I have had the opportunity to express any concerns regarding any of
          the exercises and activities selected for the circuits program
        </label>
        <input
          type="checkbox"
          id="question_five"
          name="question_five"
          className="consent-form__input-checkbox"
          checked={formData.question_five}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_six" className="consent-form__label">
          I have been able to ask questions regarding any concerns and have had
          those questions answered to my satisfaction
        </label>
        <input
          type="checkbox"
          id="question_six"
          name="question_six"
          className="consent-form__input-checkbox"
          checked={formData.question_six}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_seven" className="consent-form__label">
          I am in good physical condition, have no impairment and have been
          given the opportunity to inform the instructor of any conditions which
          might prevent my participation in the circuit program or that will be
          exacerbated by the involvement in the circuit programme
        </label>
        <input
          type="checkbox"
          id="question_seven"
          name="question_seven"
          className="consent-form__input-checkbox"
          checked={formData.question_seven}
          onChange={changeChecked}
        />
      </div>
      <div className="consent-form__wrapper-checkbox">
        <label htmlFor="question_eight" className="consent-form__label">
          I have been advised to ease activity and withdraw from the circuit if
          I experience unusual discomfort and feel the need to stop
        </label>
        <input
          type="checkbox"
          id="question_eight"
          name="question_eight"
          className="consent-form__input-checkbox"
          checked={formData.question_eight}
          onChange={changeChecked}
        />
      </div>
      <Divider />
      <p className="consent-form__text">
        I have read and understand the above agreement; I have been able to ask
        questions regarding any concerns I might have; I have had those
        questions answered to my satisfaction; and I am freely signing this
        agreement
      </p>
      <div className="consent-form__grid">
        <div className="consent-form__wrapper">
          <label htmlFor="name" className="consent-form__label">
            Participant name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
        <div className="consent-form__wrapper">
          <label htmlFor="date" className="consent-form__label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
        <div className="consent-form__wrapper">
          <label htmlFor="signed" className="consent-form__label">
            Signature
          </label>
          <input
            type="text"
            id="signed"
            name="signed"
            value={formData.signed}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
        <div className="consent-form__wrapper">
          <label htmlFor="email" className="consent-form__label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="consent-form__input"
          />
        </div>
      </div>
      <button type="submit" className="consent-form__btn">
        Save
      </button>
    </form>
  );
}

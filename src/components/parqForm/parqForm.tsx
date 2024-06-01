import React, { SyntheticEvent, useState } from "react";
import "./parqForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";
import { IUser } from "../../interfaces/user";

export default function ParqForm({ toggleParqModal }: any) {
  const [formData, setFormData] = useState({
    question_one: true,
    question_two: true,
    question_three: true,
    question_four: true,
    question_four_ans: "",
    question_five: true,
    question_five_ans: "",
    question_six: true,
    question_six_ans: "",
    question_seven: true,
    name: "",
    signed: "",
    date: "",
  });

  const changeChecked = (event: any) => {
    const { name, checked } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: checked }));
  };

  const changeCheckedNo = (event: any) => {
    const { name, checked } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: !checked }));
  };

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  const nav = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const resp = await axios.post(`${baseUrl}/parqs`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    toggleParqModal();
    nav("/login");
  };
  return (
    <form className="parq-form" onSubmit={handleSubmit}>
      <h2 className="parq-form__title">General Health Questions</h2>
      <p className="parq-form__subtitle">
        Please read the 7 questions below carefully and answer each one
        honestly:
      </p>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          1. Has your doctor ever said that you have a heart condition or high
          blood pressure?
        </p>
        <label htmlFor="question_oneYes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="question_oneYes"
          name="question_one"
          checked={formData.question_one}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="question_oneNo" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="question_oneNo"
          name="question_one"
          checked={!formData.question_one}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          2. Do you feel pain in your chest at rest, during your daily
          activities of living or when you do physical activity?
        </p>
        <label htmlFor="question_twoYes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="question_twoYes"
          name="question_two"
          checked={formData.question_two}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="question_twoNo" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="question_twoNo"
          name="question_two"
          checked={!formData.question_two}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          3. Do you lose balance because of dizziness or have you lost
          consciousness in the last 12 months? Please answer ‘no’ if your
          dizziness was associated with over-breathing (including during
          vigorous exercise)
        </p>
        <label
          htmlFor="question_threeYess"
          className="parq-form__label-checkbox"
        >
          Yes
        </label>
        <input
          type="checkbox"
          id="question_threeYes"
          name="question_three"
          checked={formData.question_three}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="question_threeNo" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="question_threeNo"
          name="question_three"
          checked={!formData.question_three}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <div className="parq-form__container">
          <p className="parq-form__text">
            4. Have you ever been diagnosed with another chronic medical
            condition (other than heart disease or high blood pressure)?
            <br />
            <span className="parq-form__italic">
              Please list conditions here:
            </span>
          </p>
          <label htmlFor="">
            <textarea
              name="question_four_ans"
              value={formData.question_four_ans}
              onChange={changeHandler}
              className="parq-form__textarea"
            />
          </label>
        </div>
        <label htmlFor="question_fourYes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="question_fourYes"
          name="question_four"
          checked={formData.question_four}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="question_fourNo" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="question_fourNo"
          name="question_four"
          checked={!formData.question_four}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <div className="parq-form__container">
          <p className="parq-form__text">
            5. Are you currently taking prescribed medications for a chronic
            medical condition?
            <br />
            <span className="parq-form__italic">
              Please list condition(s) and medications here:
            </span>
          </p>
          <label htmlFor="">
            <textarea
              name="question_five_ans"
              value={formData.question_five_ans}
              onChange={changeHandler}
              className="parq-form__textarea"
            />
          </label>
        </div>
        <label htmlFor="question_fiveYes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="question_fiveYes"
          name="question_five"
          checked={formData.question_five}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="question_fiveNo" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="question_fiveNo"
          name="question_five"
          checked={!formData.question_five}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <div className="parq-form__container">
          <p className="parq-form__text">
            6. Do you currently have (or have had within the past 12 months) a
            bone, joint, or soft tissue (muscle, ligament, or tendon) problem
            that could be made worse by becoming more physically active? Please
            answer no if you had a problem in the past, but it does not limit
            your current ability to be physically active. <br />
            <span className="parq-form__italic">
              Please list condition(s) here:
            </span>
          </p>
          <label htmlFor="">
            <textarea
              name="question_six_ans"
              value={formData.question_six_ans}
              onChange={changeHandler}
              className="parq-form__textarea"
            />
          </label>
        </div>
        <label htmlFor="question_sixYes" className="parq-form__label-checkbox">
          Yes
        </label>
        <input
          type="checkbox"
          id="question_sixYes"
          name="question_six"
          checked={formData.question_six}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="question_sixNo" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="question_sixNo"
          name="question_six"
          checked={!formData.question_six}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <div className="parq-form__wrapper-checkbox">
        <p className="parq-form__text">
          7. as your doctor ever said that you should only do medically
          supervised physical activity?
        </p>
        <label
          htmlFor="question_sevenYes"
          className="parq-form__label-checkbox"
        >
          Yes
        </label>
        <input
          type="checkbox"
          id="question_sevenYes"
          name="question_seven"
          checked={formData.question_seven}
          onChange={changeChecked}
          className="parq-form__input-checkbox"
        />
        <label htmlFor="question_sevenNo" className="parq-form__label-checkbox">
          No
        </label>
        <input
          type="checkbox"
          id="question_sevenNo"
          name="question_seven"
          checked={!formData.question_seven}
          onChange={changeCheckedNo}
          className="parq-form__input-checkbox"
        />
      </div>
      <p className="parq-form__subtitle">
        If you answered NO to all of the questions above, you are cleared for
        physical activity.
      </p>
      <p className="parq-form__text">
        Please sign the PARTICIPANT DECLARATION at the end of this form
      </p>
      <ul className="parq-form__list">
        <li className="parq-form__list-item">
          Start becoming much more physically active - start slowly and build up
          gradually
        </li>
        <li className="parq-form__list-item">
          Follow International Physical Activity Guidelines for your age (
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
            target="_blank"
            className="parq-form__link"
          >
            physical activity fact sheet
          </a>
          ).
        </li>
        <li className="parq-form__list-item">
          You may take part in a health and fitness appraisal
        </li>
        <li className="parq-form__list-item">
          If you are over the age of 45 and not accustomed to regular vigorous
          to maximal effort exercise, consult a qualified exercise professional
          before engaging in this intensity of exercise
        </li>
        <li className="parq-form__list-item">
          If you have any further questions, contact a qualified exercise
          professional
        </li>
      </ul>
      <p className="parq-form__subtitle">Participant declaration</p>
      <p className="parq-form__text">
        If you are less than the legal age required for consent or require the
        assent of a care provider, your parent, guardian or care provider must
        also sign this form. I, the undersigned, have read, understood to my
        full satisfaction and completed this questionnaire. I acknowledge that
        this physical activity clearance is valid for a maximum of 12 months
        from the date it is completed and becomes invalid if my condition
        changes. I also acknowledge that the community/fitness centre may retain
        a copy of this form for its records. In these instances, it will
        maintain the confidentiality of the same, complying with applicable law.
      </p>
      <div className="parq-form__grid">
        <div className="parq-form__wrapper">
          <label htmlFor="name" className="parq-form__label">
            Participant name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            className="parq-form__input"
          />
        </div>
        <div className="parq-form__wrapper">
          <label htmlFor="signed" className="parq-form__label">
            Signature
          </label>
          <input
            type="text"
            id="signed"
            name="signed"
            value={formData.signed}
            onChange={changeHandler}
            className="parq-form__input"
          />
        </div>
        <div className="parq-form__wrapper">
          <label htmlFor="date" className="parq-form__label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={changeHandler}
            className="parq-form__input"
          />
        </div>
      </div>
      <button type="submit" className="parq-form__btn">
        Save
      </button>
    </form>
  );
}

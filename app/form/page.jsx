"use client";

import { useState } from "react";
import { StepOne } from "../_components/stepone";
import { StepTwo } from "../_components/steptwo";
import { StepThree } from "../_components/stepthree";

const Home = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errors = {};
    const email = data.get("email");

    if (!email) {
      errors.email = "email is required";
    }
    setErrors(errors);
    return Object.keys(errors).lenght === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    if (validate(data)) {
      return null;
    }
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const CurrentStep = [StepOne, StepTwo, StepThree][currentStepIndex];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" id="email" placeholder="Your email" />
        {errors.email && <p className="text-red-400">{errors.email}</p>}
        <button type="submit">Continue</button>
      </form>
      <CurrentStep />
    </div>
  );
};

export default Home;

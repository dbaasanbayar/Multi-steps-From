"use client";

import { StepOne } from "../_components/stepone";
import { StepTwo } from "../_components/steptwo";
import { StepThree } from "../_components/stepthree";
import { Button } from "../_components/Button";
import { Input } from "../_components/Input";

import { useState } from "react";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  const buttonNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const buttonBack = () => {
    setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="flex justify-center items-center">
      <CurrentStep />
    </div>
  );
}

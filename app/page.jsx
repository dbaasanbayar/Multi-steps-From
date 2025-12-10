"use client";
import { useState } from "react";
import { StepOne } from "./_components/stepone";
import { StepTwo } from "./_components/steptwo";
import { StepThree } from "./_components/stepthree";
import { SetAllSet } from "./_components/stepallset";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentStep = [StepOne, StepTwo, StepThree, SetAllSet][currentIndex];

  const buttonNext = () => {
    if (currentIndex < 4) setCurrentIndex(currentIndex + 1);
  };
  const buttonBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <CurrentStep buttonNext={buttonNext} buttonBack={buttonBack} />
    </div>
  );
}

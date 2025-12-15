"use client";
import { useState } from "react";
import { StepOne } from "./_components/stepone";
import { StepTwo } from "./_components/steptwo";
import { StepThree } from "./_components/stepthree";
import { AllSet } from "./_components/stepallset";

export default function Page() {
  // const [currentValue, setCurrentValue] = useState();
  // const [changedValue, setChangedValue] = useState();
  const [errors, setErrors] = [
    {
      firstName: null,
      lastName: null,
      userName: null,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentStep = [StepOne, StepTwo, StepThree, AllSet][currentIndex];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.firstName.value);
    if (event.target.name.value.lenght < 5) {
      setErrors("Too short name");
    }
  };
  const buttonNext = () => {
    if (currentIndex < 4) setCurrentIndex(currentIndex + 1);
  };
  const buttonBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <form action="" onSubmit={handleSubmit}>
        <CurrentStep buttonNext={buttonNext} buttonBack={buttonBack} />
      </form>
    </div>
  );
}

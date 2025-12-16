"use client";
import { useState } from "react";
import { StepOne } from "./_components/stepone";
import { StepTwo } from "./_components/steptwo";
import { StepThree } from "./_components/stepthree";
import { AllSet } from "./_components/stepallset";

export default function Page() {
  const [errors, setErrors] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    dateofbirth: "",
    profileimage: "",
  });

  const CurrentStep = [StepOne, StepTwo, StepThree, AllSet][currentIndex];

  const validate = (data) => {
    const newErrors = {};
    if (currentIndex === 0) {
      if (!formData.firstname.trim()) {
        newErrors.firstname =
          "First name cannot contain special characters or numbers.";
      }
      if (!formData.lastname.trim()) {
        newErrors.lastname =
          "Last name cannot contain special characters or numbers.";
      }
      if (!formData.username.trim()) {
        newErrors.username =
          "This username is already taken. Please choose another one.";
      }
    }
    if (currentIndex === 1) {
      if (!formData.email.trim()) {
        newErrors.email = "Please provide a valid email address.";
      }
      if (!formData.phonenumber.trim()) {
        newErrors.phonenumber = "Please enter a valid phone number.";
      }
      if (!formData.password.trim()) {
        newErrors.password = "Password must include letters and numbers.";
      }
      if (!formData.confirmpassword.trim()) {
        newErrors.confirmpassword = "Passwords do not match. Please try again.";
      }
    }
    if (currentIndex === 2) {
      if (!formData.dateofbirth.trim()) {
        newErrors.dateofbirth = "Please select a date.";
      }
      if (!formData.profileimage.trim()) {
        newErrors.profileimage = "Image cannot be blank";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buttonNext = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (!validate(data)) {
      return;
    }
    setCurrentIndex((prev) => Math.min(prev + 1, 3));
    console.log(currentIndex);
  };

  function buttonBack() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }
  return (
    <div className="flex justify-center h-screen items-center">
      <form action="" onSubmit={buttonNext}>
        <CurrentStep
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          buttonBack={buttonBack}
        />
      </form>
    </div>
  );
}

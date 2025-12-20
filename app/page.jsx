"use client";
import { useState } from "react";
import { StepOne } from "./_components/stepone";
import { StepTwo } from "./_components/steptwo";
import { StepThree } from "./_components/stepthree";
import { AllSet } from "./_components/stepallset";

export default function Page() {
  const [errors, setErrors] = useState({});
  const [currentIndex, setCurrentIndex] = useState(2);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    dateOfBirth: "",
    profileimage: "",
  });

  const CurrentStep = [StepOne, StepTwo, StepThree, AllSet][currentIndex];
  const validate = () => {
    const newErrors = {};
    const data = formData;

    if (currentIndex === 0) {
      if (!data.firstname || !data.firstname.trim()) {
        newErrors.firstname = "First name is required.";
      } else if (data.firstname.length < 2) {
        newErrors.firstname = "First name must be at least 2 characters";
      } else if (data.firstname.length > 50) {
        newErrors.firstname = "First name must be less than 50 characters";
      }

      if (!data.lastname || !data.lastname.trim()) {
        newErrors.lastname = "Last name is required.";
      } else if (data.lastname.length < 2) {
        newErrors.lastname = "Last name must be at least 2 characters";
      } else if (data.lastname.length > 50) {
        newErrors.lastname = "Last name must be less than 50 characters";
      }

      if (!data.username || !data.username.trim()) {
        newErrors.username = "Username is required.";
      } else if (data.username.length < 3 || data.username.length > 20) {
        newErrors.username = "Username must be 3–20 characters";
      }
    }

    if (currentIndex === 1) {
      if (!data.email?.trim()) {
        newErrors.email = "Email cannot be empty";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = "Please provide a valid email address.";
      }

      if (!data.phonenumber || !data.phonenumber.trim()) {
        newErrors.phonenumber = "Phone number is required";
      } else if (!/^\+?[0-9]{8,15}$/.test(data.phonenumber)) {
        newErrors.phonenumber = "Invalid phone number";
      }

      if (!data.password) {
        newErrors.password = "Password is required";
      } else if (data.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters.";
      }

      if (!data.confirmpassword) {
        newErrors.confirmpassword = "Please confirm your password.";
      } else if (data.confirmpassword !== data.password) {
        newErrors.confirmpassword = "Passwords do not match.";
      }
    }

    if (currentIndex === 2) {
      if (!data.dateOfBirth || !data.dateOfBirth.trim()) {
        newErrors.dateOfBirth = "Please select a date.";
      } else {
        const birthDate = new Date(data.dateOfBirth);
        const today = new Date();

        if (birthDate > today) {
          newErrors.dateOfBirth = "Date cannot be in the future.";
        } else {
          let age = today.getFullYear() - birthDate.getFullYear();
          const m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
          if (age < 18) {
            newErrors.dateOfBirth = "You must be at least 18 years old.";
          }
        }
      }

      if (!data.profileimage) {
        newErrors.profileimage = "Image cannot be blank";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buttonNext = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log("Data", data);
    if (!validate(data)) {
      console.log("return");
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

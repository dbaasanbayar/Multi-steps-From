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
      const fname = data.firstname?.trim();
      if (!fname) {
        newErrors.firstname = "First name is required.";
      } else if (fname.length < 2 || fname.length > 50) {
        newErrors.firstname = "First name must be 2-50 characters.";
      } else if (!/^[a-zA-Z\s-]+$/.test(fname)) {
        newErrors.firstname = "Only letters, spaces, or hyphens allowed.";
      }
      // if (!data.firstname || !data.firstname.trim()) {
      //   newErrors.firstname = "First name is required.";
      // } else if (data.firstname.length < 2) {
      //   newErrors.firstname = "First name must be at least 2 characters";
      // } else if (data.firstname.length > 50) {
      //   newErrors.firstname = "First name must be less than 50 characters";
      // } else {
      //   let valid = true;
      //   for (let i = 0; i < data.firstname.length; i++) {
      //     const char = data.firstname[i];
      //     if (
      //       !(
      //         (char >= "A" && char <= "Z") ||
      //         (char >= "a" && char <= "z") ||
      //         char === " " ||
      //         char === "-"
      //       )
      //     ) {
      //       valid = false;
      //       break;
      //     }
      //   }
      //   if (!valid) {
      //     newErrors.firstname =
      //       "First name can only contain letters, spaces, or hyphens.";
      //   }
      // }
      if (!data.lastname || !data.lastname.trim()) {
        newErrors.lastname = "Last name is required.";
      } else if (!data.lastname.length > 2) {
        newErrors.lastname = "Last name must be at least 2 characters";
      } else if (!data.lastname.length < 50) {
        newErrors.lastname = "Last name must be less than 50 characters";
      } else {
        let valid = true;
        for (let i = 0; i < data.lastname.length; i++) {
          const char = data.lastname[i];
          if (
            !(
              (char >= "A" && char <= "Z") ||
              (char >= "a" && char <= "z") ||
              char === " " ||
              char === "-"
            )
          ) {
            valid = false;
            break;
          }
          if (!valid) {
            newErrors.lastname =
              "Last name can only contain letters, spaces, or hyphens.";
          }
        }
      }
      if (!data.username || !data.username.trim()) {
        newErrors.username = "Username is required.";
      } else if (!data.username.length > 3 || !data.username.length < 50) {
        newErrors.username = "Username must be 3–20 characters";
      } else {
        let valid = true;
        for (let i = 0; i < data.username.length; i++) {
          const char = data.username[i];
          if (
            !(
              char >= "a" &&
              char <= "z" &&
              char >= "0" &&
              char <= "9" &&
              char !== "_"
            )
          ) {
            valid = false;
            break;
          }
        }
        if (!valid) {
          newErrors.username =
            "Start with a letter, and contain only lowercase letters, numbers, or underscores.";
        }
      }
    }

    // if (currentIndex === 1) {
    //   if (!data.email.trim()) {
    //     newErrors.email = "Please provide a valid email address.";
    //   }
    //   if (!data.phonenumber.trim()) {
    //     newErrors.phonenumber = "Please enter a valid phone number.";
    //   }
    //   if (!data.password.trim()) {
    //     newErrors.password = "Password must include letters and numbers.";
    //   }
    //   if (!data.confirmpassword.trim()) {
    //     newErrors.confirmpassword = "Passwords do not match. Please try again.";
    //   }
    // }
    // if (currentIndex === 2) {
    //   if (!data.dateofbirth.trim()) {
    //     newErrors.dateofbirth = "Please select a date.";
    //   }
    //   if (!data.profileimage.trim()) {
    //     newErrors.profileimage = "Image cannot be blank";
    //   }
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buttonNext = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (!validate(data)) {
      console.log("i'm back");
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
